import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    "/getting-started/",
    {
        text: "指南",
        icon: "lightbulb",
        prefix: "/guide/",
        children: [
            {
                text: "Bar",
                icon: "lightbulb",
                prefix: "bar/",
                children: ["baz", {text: "...", icon: "ellipsis", link: ""}],
            },
            {
                text: "Foo",
                icon: "lightbulb",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "ellipsis", link: ""}],
            },
        ],
    },
    {
        text: "官方文档",
        icon: "book",
        link: "https://www.django-rest-framework.org",
    }
]);
