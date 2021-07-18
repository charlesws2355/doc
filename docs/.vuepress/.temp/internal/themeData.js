export const themeData = {
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "介绍",
          "link": "/zh/guide/"
        },
        {
          "text": "DOC",
          "children": [
            {
              "text": "WEB DOC",
              "children": [
                "/zh/html/",
                "/zh/css/",
                "/zh/js/"
              ]
            }
          ]
        }
      ],
      "sidebar": {
        "/zh/html/": [
          {
            "text": "html",
            "children": [
              "/zh/html/README.md",
              "/zh/html/html1.md",
              "/zh/html/html2.md"
            ]
          }
        ],
        "/zh/css/": [
          {
            "text": "css",
            "children": [
              "/zh/css/README.md",
              "/zh/css/css1.md",
              "/zh/css/css2.md"
            ]
          }
        ],
        "/zh/js/": [
          {
            "text": "js",
            "children": [
              "/zh/js/README.md",
              "/zh/js/js1.md",
              "/zh/js/js2.md"
            ]
          }
        ]
      },
      "selectLanguageName": "English"
    },
    "/zh/": {
      "navbar": [
        {
          "text": "介绍",
          "link": "/zh/guide/"
        },
        {
          "text": "DOC",
          "children": [
            {
              "text": "WEB DOC",
              "children": [
                "/zh/html/",
                "/zh/css/",
                "/zh/js/"
              ]
            }
          ]
        }
      ],
      "sidebar": {
        "/zh/html/": [
          {
            "text": "html",
            "children": [
              "/zh/html/README.md",
              "/zh/html/html1.md",
              "/zh/html/html2.md"
            ]
          }
        ],
        "/zh/css/": [
          {
            "text": "css",
            "children": [
              "/zh/css/README.md",
              "/zh/css/css1.md",
              "/zh/css/css2.md"
            ]
          }
        ],
        "/zh/js/": [
          {
            "text": "js",
            "children": [
              "/zh/js/README.md",
              "/zh/js/js1.md",
              "/zh/js/js2.md"
            ]
          }
        ]
      },
      "selectLanguageName": "简体中文",
      "selectLanguageText": "选择语言",
      "selectLanguageAriaLabel": "选择语言"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
