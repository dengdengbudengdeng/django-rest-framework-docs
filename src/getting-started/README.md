---
title: 快速入门
icon: rocket
---

## 开篇介绍

我们将要创建一套简单的 **API** ，来实现 **admin** 用户可以查看和编辑系统中的用户以及组。

## 新建项目目录

打开终端，切换到一个你喜欢的路径下，然后新建一个项目目录并进入目录，如下命令所示：

```bash
mkdir tutorial && cd $_
```

## 虚拟环境

在项目目录中新建一个虚拟环境，你可以使用 Python 内置的 `venv` 模块，又或者使用 `virtualenv` 第三方库来新建虚拟环境：

```bash
python3 -m venv .venv
```

之后激活该虚拟环境，不同的操作系统有不同的激活方法，如果你不知道如何激活虚拟环境，查看该篇博客 [Python 虚拟环境管理][python-venv] 回顾一下吧~

## 安装项目依赖

虚拟环境创建完成后安装项目依赖，如下命令所示：

```bash
python3
```

## 项目配置

首先，我们要创建一个名为 `tutorial` 的 **Django** 项目，项目创建完成后再新建一个 `quickstart` 模块。

[python-venv]: https://www.python.org
