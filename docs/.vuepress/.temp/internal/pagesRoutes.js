import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","DOC",["/index.html","/README.md"]],
  ["v-2d0ad528","/zh/","DOC",["/zh/index.html","/zh/README.md"]],
  ["v-53fabfb4","/zh/css/","CSS",["/zh/css/index.html","/zh/css/README.md"]],
  ["v-2eb115d7","/zh/css/css1.html","CSS1",["/zh/css/css1.md"]],
  ["v-3065ee76","/zh/css/css2.html","CSS2",["/zh/css/css2.md"]],
  ["v-c0c65444","/zh/js/","JS",["/zh/js/index.html","/zh/js/README.md"]],
  ["v-375ffca2","/zh/js/js1.html","JS1",["/zh/js/js1.md"]],
  ["v-33f64b64","/zh/js/js2.html","JS2",["/zh/js/js2.md"]],
  ["v-47357bdb","/zh/guide/","GUIDE",["/zh/guide/index.html","/zh/guide/README.md"]],
  ["v-2ba411bc","/zh/html/","HTML",["/zh/html/index.html","/zh/html/README.md"]],
  ["v-74b3ad22","/zh/html/html1.html","HTML1",["/zh/html/html1.md"]],
  ["v-7149fbe4","/zh/html/html2.html","HTML2",["/zh/html/html2.md"]],
  ["v-3706649a","/404.html","",[]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
