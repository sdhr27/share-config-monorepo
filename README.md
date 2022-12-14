# share config template

An pnpm based monorepo template with shared eslint and jest config.

English | [įŽäŊä¸­æ](./README.zh-CN.md)

## đ How to use?

copy your repo into the packages directory.  
Run pnpm install & pnpm sync.

## đ notice

- origin eslint and jest configration could cause conflict.
- packages/exercise is an example.
- auto stylelint is set in .vscode/settigns.json.
- jest-debugger program is written in .vscode/launch.json for vscode debug. Try it out!

## đ custom

- To adjust eslint config, modify the auto generated `.eslintrc.js` in packages/your-project.
- To adjust jest config, modify the auto generated `jest.config.js` in the root.

## đ¤ Command introduction

| Name           | Description             | Remarks                             |
| -------------- | ----------------------- | ----------------------------------- |
| `pnpm sync`    | config share begining   | share dependencies and config files |
| `pnpm clean`   | delete all node_modules | -                                   |
| `pnpm install` | install all packages    | -                                   |
| `pnpm test`    | run all jest tests      | -                                   |

## đ Catalog Introduction

```
âââ .vscode                       VScode configrations
âââ pacakges                      monorepo packages
â   âââ eslint-config             eslint config package
â       âââ index.js              the main config file
â       âââ package.json          eslint package.json
â   âââ jest-config               jest config package
â       âââ scripts               jest enviroment support scirpts
â       âââ babel.config.js       jest babel configration
â       âââ jest.config.js        jest configration
â       âââ index.js              main entry
â   âââ sync-config               sync scripts package
â   âââ exercise                  An example
âââ tsconfig.json                 typescript config
```
