---
home: true
icon: /drf-logo-animations.svg
title: 甜水镇
heroFullScreen: true
heroImage: /drf-logo-light.png
heroImageDark: /drf-logo-dark.png
heroText: Django REST framework
tagline: Django REST framework (又称 DRF 或 REST framework) 是一个用于构建 RESTful API 的强大而灵活的工具包✨
bgImage: /assets/image/drf-background-01-light.png
bgImageDark: /assets/image/drf-background-01-dark.png
bgImageStyle:
  background-repeat: repeat
  background-size: initial
actions:
  - text: 快速入门
    icon: signs-post
    link: /getting-started/
    type: primary
  - text: 点击开始变强
    icon: dumbbell
    link: /guide/
    type: second
highlights:
  - header: 为什么选择 REST framework
    description: 以下几点是我们选择它的原因
    image: /drf-logo-animations.svg
    highlights:
      - title: 提供了浏览式 API 页面
      - title: 多种身份认证和权限校验方式的支持
      - title: 提供了定义序列化器 Serializer 的方法，可以快速根据 ORM 或非 ORM 数据自动序列化/反序列化
      - title: 提供了丰富的类视图、Mixin 扩展类，简化视图的编写
      - title: 丰富的定制层级：函数视图、类视图、视图集合到自动生成 API，满足各种需要
      - title: 完善的文档、活跃的社区支持以及丰富的插件
      - title: 内置限流系统
      - title: 被包括 Mozilla、Red Hat、Heroku 和 Eventbrite 在内的国际知名公司使用和信任
      - title: ...
  - header: 功能特性
    description: REST framework 提供了很多功能特性供我们使用
    image: /assets/icon/streamline-emojis--smiling-face-with-sunglasses.svg
    features:
      - title: 序列化组件
        icon: clipboard-check
        details: 提供序列化和反序列化功能。
        link: /zh/guide/markdown/

      - title: 请求对象与响应对象
        icon: person-chalkboard
        details: DRF 封装了 Django 原生的请求与响应对象，提供了更多功能。
        link: /zh/guide/layout/slides

      - title: 视图系列
        icon: object-group
        details: DRF 提供了一系列的视图类，根据需求的不同可以选择使用不同的视图类。
        link: /zh/guide/layout/

      - title: 路由器
        icon: comment-dots
        details: DRF 提供了路由器组件，可以自动生成路由。
        link: /zh/guide/feature/comment.html

      - title: 认证组件
        icon: circle-info
        details: 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
        link: /zh/guide/feature/page-info.html

      - title: 权限组件
        icon: blog
        details: 使用一些很棒的布局提供博客功能，通过文章的日期、标签和分类，自动生成文章、分类、标签与时间轴列表
        link: /zh/guide/blog/intro.html

      - title: 限流组件
        icon: palette
        details: 支持自定义主题色并允许用户在预设的主题颜色之间切换
        link: /zh/guide/interface/theme-color.html

      - title: 过滤组件
        icon: circle-half-stroke
        details: 可以自由切换浅色模式与深色模式
        link: /zh/guide/interface/darkmode.html

      - title: 分页组件
        icon: lock
        details: 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
        link: /zh/guide/feature/encrypt.html

      - title: 异常处理机制
        icon: search
        details: 支持 docsearch 和基于客户端的搜索
        link: /zh/guide/feature/search.html

      - title: 自动生成接口文档
        icon: image
        details: 像相册一样允许你浏览、缩放并分享你的页面图片
        link: /zh/guide/feature/photo-swipe.html

      - title: 更多功能。。。
        icon: ellipsis
        details: 包括图标支持、全屏按钮、返回顶部按钮等
        link: /zh/guide/feature/
---

## 🛠️ 环境要求

为了保证最佳性能和兼容性，**Django** **REST** **framework** 对运行环境有一定的要求：

* **Python 版本**：兼容 **Python** **3.8** 至 **Python** **3.13** 的多个版本。
* **Django 版本**：支持最新的 **Django** **4.2** 和 **5.x** 版本。

::: tip

我们强烈建议使用每个 **Python** 系列的最新补丁版本，以获得最稳定的体验和支持。保持 **Django** 版本更新可以让你享受到最新的特性和安全补丁。

:::

除了上述的基本要求外，**DRF** 还提供了几个可选的依赖包，用于增强其功能。虽然这些不是必须安装的，但总会有场景会用到它们：

* **[PyYAML][pyyaml]（5.1+），[uritemplate][uriteemplate]（3.0.0+）**：这两个库主要用于支持 **API** **Schema** 的生成。（我们一般不主动安装这两个库，因为在我们生成 **API** **Schema** 的时候会使用第三方库 **[drf-spectacular][drf-spectacular]** 来生成，安装这个库之后就会自动安装这两个库）
* **[Markdown][markdown]（3.3.0+）**：通过集成 **Markdown** 库，**DRF** 能够在浏览式 **API** 中显示富文本描述，提高用户体验。
* **[Pygments][pygments]（2.7.0+）**：这个库用于为 **Markdown** 处理添加语法高亮，使代码片段更加清晰易读。
* **[django-filter][django-filter]（1.0.1+）**：它为 DRF 提供了过滤查询集的支持，使得 API 用户可以根据特定条件筛选数据。
* **[django-guardian][django-guardian]（1.1.1+）**：该库实现了对象级别的权限校验，对于需要细粒度访问控制的应用来说非常重要。

## ⚙️ 安装与配置

现在你已经了解了 **DRF** 的环境要求和可选依赖，接下来让我们一起看看如何安装和配置 **DRF** ，以确保它可以顺利集成到你的 **Django** 项目中。

### 安装

最直接的方式是使用 `pip` 来安装 **DRF** 以及任何你可能需要的可选包。激活虚拟环境之后执行如下所示命令：

```bash
python3 -m pip install djangorestframework
python3 -m pip install markdown
python3 -m pip install django-filter
```

### 注册 DRF

安装完成后，下一步是在 **Django** 项目的配置文件中添加 `'rest_framework'` 到 `INSTALLED_APPS` 列表来注册 **DRF**：

```python
INSTALLED_APPS = [
    ...
    'rest_framework',
]
```

### 设置浏览式 API 的登录和登出视图

如果你计划使用 **DRF** 提供的浏览式 **API** 功能，通常还需要添加 **REST** **framework** 的登录和登出视图。在项目的根 `urls.py` 文件中添加如下代码：

```python
urlpatterns = [
    ...
    path('api-auth/', include('rest_framework.urls'))
]
```

这段代码的作用是将 **DRF** 内置的身份验证视图包含进来，使得用户能够通过浏览器访问登录页面，并实现会话身份验证。这意味着，当你在开发或测试阶段时，可以直接在浏览器中登录，然后使用 **DRF** 提供的界面来探索和测试 **API** 端点。

[pyyaml]: https://pypi.org/project/PyYAML
[uriteemplate]: https://pypi.org/project/uritemplate
[drf-spectacular]: https://drf-spectacular.readthedocs.io/
[markdown]: https://pypi.org/project/Markdown
[pygments]: https://pypi.org/project/Pygments
[django-filter]: https://pypi.org/project/django-filter
[django-guardian]: https://github.com/django-guardian/django-guardian