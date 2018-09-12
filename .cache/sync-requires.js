// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-js": preferDefault(require("C:\\git\\poop\\src\\templates\\project.js")),
  "component---cache-dev-404-page-js": preferDefault(require("C:\\git\\poop\\.cache\\dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("C:\\git\\poop\\src\\pages\\about.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\git\\poop\\src\\pages\\index.js")),
  "component---src-pages-projects-js": preferDefault(require("C:\\git\\poop\\src\\pages\\projects.js"))
}

