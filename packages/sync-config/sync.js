const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generator = require('@babel/generator').default;

const innerPkgs = ['eslint-config', 'jest-config'];
// 读取非内置模组package.json
const targets = glob
  .sync('../../packages/*/package.json')
  .filter((p) => !innerPkgs.find((item) => p.includes(item)));

const [eslintPackageObj, jestPackageObj] = innerPkgs.map((item) =>
  getPacakgeObj(item),
);

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
        ...curDevDependencies,
        // eslint: eslintPackageObj.dependencies.eslint,
      },
    },
    { spaces: '\t' },
  );
  // 修改/生成eslint配置文件
  const eslintFile = packageJsonPath.replace('package.json', '.eslintrc.js');
  replaceConfig(eslintFile, eslintPackageObj.name);
});

// 获取package.json内容对象
function getPacakgeObj(packageName) {
  const curPath = path.resolve(process.cwd(), `../${packageName}/package.json`);

  const curPackageObj = fs.readJsonSync(curPath);
  fs.writeJsonSync(curPath, curPackageObj, { spaces: '\t' });
  return curPackageObj;
}

// 修改eslint配置文件
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
          }
        }
      },
    });

    const { code } = generator(ast);
    fs.outputFileSync(targetFile, code);
  });
}
