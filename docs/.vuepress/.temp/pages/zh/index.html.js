export const data = {
  "key": "v-2d0ad528",
  "path": "/zh/",
  "title": "DOC",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "title": "DOC",
    "heroImage": "/images/hero.png",
    "actions": [
      {
        "text": "HTML",
        "link": "/zh/html/",
        "type": "primary"
      },
      {
        "text": "CSS",
        "link": "/zh/css/",
        "type": "secondary"
      },
      {
        "text": "JS",
        "link": "/zh/js/",
        "type": "secondary"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2018-present Charles"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "zh/README.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
