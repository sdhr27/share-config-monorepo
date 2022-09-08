# share config template

An pnpm based monorepo template with shared eslint and jest config.

English | [简体中文](./README.zh-CN.md)

## 🚀 How to use?

copy your repo into the packages directory.  
Run pnpm sync && pnpm install.

## 📒 notice

- origin eslint and jest configration could cause conflict.
- packages/exercise is an example.
- auto stylelint is set in .vscode/settigns.json.
- jest-debugger program is written in .vscode/launch.json for vscode debug. Try it out!

## 🌟 custom

- To adjust eslint config, modify the auto generated `.eslintrc.js` in packages/your-project.
- To adjust jest config, modify the auto generated `jest.config.js` in the root.

## 🤖 Command introduction

| Name           | Description             | Remarks                             |
| -------------- | ----------------------- | ----------------------------------- |
| `pnpm sync`    | config share begining   | share dependencies and config files |
| `pnpm clean`   | delete all node_modules | -                                   |
| `pnpm install` | install all packages    | -                                   |
| `pnpm test`    | run all jest tests      | -                                   |

## 📒 Catalog Introduction

```
├── .vscode                       VScode configrations
├── pacakges                      monorepo packages
│   ├── eslint-config             eslint config package
│       ├── index.js              the main config file
│       ├── package.json          eslint package.json
│   └── jest-config               jest config package
│       └── scripts               jest enviroment support scirpts
│       └── babel.config.js       jest babel configration
│       └── jest.config.js        jest configration
│       └── index.js              main entry
│   └── sync-config               sync scripts package
│   └── exercise                  An example
└── tsconfig.json                 typescript config
```
