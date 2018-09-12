// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-project-js": () => import("C:\\git\\poop\\src\\templates\\project.js" /* webpackChunkName: "component---src-templates-project-js" */),
  "component---cache-dev-404-page-js": () => import("C:\\git\\poop\\.cache\\dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("C:\\git\\poop\\src\\pages\\about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("C:\\git\\poop\\src\\pages\\index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("C:\\git\\poop\\src\\pages\\projects.js" /* webpackChunkName: "component---src-pages-projects-js" */)
}

exports.data = () => import("C:\\git\\poop\\.cache\\data.json")

