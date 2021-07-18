const config = {
  navbar: [
    {
      text: "介绍",
      link: "/zh/guide/",
    },
    {
      text: "DOC",
      children: [
        {
          text: "WEB DOC",
          children: ["/zh/html/", "/zh/css/", "/zh/js/"],
        },
      ],
    },
  ],
  sidebar: {
    "/zh/html/": [
      {
        text: "html",
        children: [
          "/zh/html/README.md",
          "/zh/html/html1.md",
          "/zh/html/html2.md",
        ],
      },
    ],
    "/zh/css/": [
      {
        text: "css",
        children: ["/zh/css/README.md", "/zh/css/css1.md", "/zh/css/css2.md"],
      },
    ],
    "/zh/js/": [
      {
        text: "js",
        children: ["/zh/js/README.md", "/zh/js/js1.md", "/zh/js/js2.md"],
      },
    ],
  },
};

module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "DOC",
      description: "DOC site",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档",
      description: "文档网站",
    },
  },
  themeConfig: {
    locales: {
      "/": config,
      "/zh/": {
        ...config,
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
      },
    },
  },
};
