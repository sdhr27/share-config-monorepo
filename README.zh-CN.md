# 共享配置 template

一个基于 pnpm 的可共享 eslint 和 jest 配置的 monorepo 仓库模板

[English](./README.md) | 简体中文

## 🚀 如何使用?

将你的项目复制粘贴到 packages 目录下。  
运行 pnpm install && pnpm sync.

## 📒 注意

- 原本的 eslint 和 jest 配置/依赖可能导致冲突。
- packages/exercise 是一个例子。
- 自动格式化已在.vscode/settigns.json 中配置
- vscode 的 jest-debugger 程序已写在.vscode/launch.json 中. 试试看！

## 🌟 自定义

- 自定义 eslint 配置，可以修改 packages/your-project 中自动生成的`.eslintrc.js` 文件。
- 自定义 jest 配置，可以修改根目录下的`jest.config.js`文件，可参考 exercise 的配置。

## 🤖 命令行

| 名称           | 描述                    | 备注                         |
| -------------- | ----------------------- | ---------------------------- |
| `pnpm sync`    | 开始分享配置            | 分享 dependencies 和配置文件 |
| `pnpm clean`   | 删除所有的 node_modules | -                            |
| `pnpm install` | 安装所有依赖            | -                            |
| `pnpm test`    | 运行所有 jest 测试      | -                            |

## 📒 目录结构

```
├── .vscode                       VScode 配置
├── pacakges                      monorepo packages
│   ├── eslint-config             eslint config package
│       ├── index.js              配置文件
│   └── jest-config               jest config package
│       └── scripts               jest enviroment 支撑 scirpts
│       └── babel.config.js       jest babel 配置
│       └── jest.config.js        jest 配置
│       └── index.js              入口文件
│   └── sync-config               sync脚本包
│   └── exercise                  一个例子
└── tsconfig.json                 typescript 配置
```
