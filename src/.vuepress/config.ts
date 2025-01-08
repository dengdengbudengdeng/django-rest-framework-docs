import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/django-rest-framework-docs/",
  port: 5173,

  lang: "zh-CN",
  title: "Django REST framework",
  description: "Django REST framework 文档",
  theme,
});
