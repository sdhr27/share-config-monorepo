/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
// 1、手动复制粘贴项目到packages中
// 2、写入package.json：devDependencies中加入pnpm依赖、更新eslint、jest核心依赖
// 3、重装依赖
// 4、配置文件修改
const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

const inner = ['eslint-config', 'jest-config'];
const config = fs.readJsonSync(path.resolve(process.cwd(), './config.json'));
// 读取非内置模组package.json
const targets = glob
  .sync('./packages/*/package.json')
  .filter((p) => !inner.find((item) => p.includes(item)));

const [eslintPackageObj, jestPackageObj] = inner.map((item) => addName(item));

targets.push('./package.json'); // 加入根目录package.json
targets.forEach((target) => {
  const packageJsonPath = path.resolve(process.cwd(), target);
  const packageObj = fs.readJsonSync(packageJsonPath);
  const curDevDependencies = packageObj.devDependencies;
  // 删除原来的workspace
  for (const key in curDevDependencies) {
    if (curDevDependencies.hasOwnProperty(key)) {
      if (curDevDependencies[key].includes('workspace')) {
        delete curDevDependencies[key];
      }
    }
  }
  // 修改package.jsonpackageObj.devDependencies
  fs.writeJsonSync(
    packageJsonPath,
    {
      ...packageObj,
      devDependencies: {
        [eslintPackageObj.name]: `workspace:^${eslintPackageObj.version}`,
        [jestPackageObj.name]: `workspace:^${jestPackageObj.version}`,
        typescript: eslintPackageObj.dependencies.typescript,
        ...curDevDependencies,
        eslint: eslintPackageObj.dependencies.eslint,
        jest: jestPackageObj.dependencies.jest,
      },
    },
    { spaces: '\t' },
  );
  // 修改/生成eslint配置文件
  const eslintFile = packageJsonPath.replace('package.json', '.eslintrc.js');
  replaceConfig(eslintFile, eslintPackageObj.name);
});
// 修改/生成jest配置文件
const jestConfigFile = path.resolve(process.cwd(), './jest.config.js');
const jestBabelConfigFile = path.resolve(process.cwd(), './babel.config.js');

fs.ensureFile(jestConfigFile).then(() => {
  const jestConfig = require(`@${config.name}/jest-config`).jest;
  let finalConfig;
  if (config.jest instanceof Array) {
    const configjest = config.jest.map((item) => {
      const { displayName } = item;
      return JSON.parse(
        String(JSON.stringify(item)).replace(
          /<rootDir>/g,
          `<rootDir>/packages/${displayName}`,
        ),
      );
    });

    finalConfig = {
      projects: configjest.map((item) => {
        for (const key in item) {
          if (item.hasOwnProperty(key) && jestConfig.hasOwnProperty(key)) {
            item[key] = {
              ...jestConfig[key],
              ...item[key],
            };
          }
        }
        return {
          ...jestConfig,
          ...item,
        };
      }),
    };
  } else if (config.jest) {
    const originConfig = require(`@${config.name}/jest-config`).jest;

    finalConfig = {
      projects: [originConfig],
    };
  }
  if (finalConfig) {
    // 输出jest配置文件
    fs.outputFileSync(
      jestConfigFile,
      `module.exports = ${JSON.stringify(finalConfig, null, '\t')}`,
    );
    targets.forEach((target) => {
      const jestFile = path
        .resolve(process.cwd(), target)
        .replace('package.json', 'jest.config.js');
      fs.outputFileSync(
        jestFile,
        `module.exports = ${JSON.stringify(finalConfig, null, '\t')}`,
      );
    });
  }
});
fs.ensureFile(jestBabelConfigFile).then(() => {
  fs.outputFileSync(
    jestBabelConfigFile,
    `module.exports = require('${jestPackageObj.name}').babel;`,
  );
});

function addName(packageName) {
  const curPath = path.resolve(
    process.cwd(),
    `./packages/${packageName}/package.json`,
  );

  const curPackageObj = fs.readJsonSync(curPath);
  fs.writeJsonSync(
    curPath,
    {
      ...curPackageObj,
      name: `@${config.name}/${packageName}`,
    },
    { spaces: '\t' },
  );
  return curPackageObj;
}

// 修改配置文件
function replaceConfig(targetFile, targetConfig) {
  fs.ensureFile(targetFile).then(() => {
    const result = fs.readFileSync(targetFile, 'utf-8');
    if (!result) {
      fs.outputFileSync(
        targetFile,
        `module.exports = {\n  extends: ['${targetConfig}'],\n};`,
      );
      return;
    }
    // 已有配置文件、进行修改
    const ast = parser.parse(result);
    traverse(ast, {
      enter(p) {
        if (p.isProperty()) {
          if (p.node.key.name === 'extends') {
            p.node.value.elements = [t.stringLiteral(targetConfig)];
            // if (
            //   !p.node.value.elements.find((elm) => elm.value === targetConfig)
            // ) {
            //   p.node.value.elements.push(t.stringLiteral(targetConfig));
            // }
          }
        }
      },
    });

    const { code } = generator(ast);
    fs.outputFileSync(targetFile, code);
  });
}
