import packageJson from "../package.json";

const manifest = {
  manifest_version: 3,
  name: packageJson.name,
  permissions: ["downloads", "storage"],
  host_permissions: ["*://*.fanbox.cc/*"],
  version: packageJson.version,
  description: packageJson.description,
  options_page: "src/pages/options/index.html",
  background: { service_worker: "src/pages/backend/index.js" },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "fanbox_icon.png",
  },
  // chrome_url_overrides: {
  //   newtab: 'src/pages/newtab/index.html',
  // },
  icons: {
    128: "fanbox_icon.png",
  },
  content_scripts: [
    {
      matches: ["*://*.fanbox.cc/*", "<all_urls>"],
      js: ["src/pages/content/index.js"],
      css: ["contentStyle.css"],
    },
  ],
  devtools_page: "src/pages/devtools/index.html",
  web_accessible_resources: [
    {
      resources: ["contentStyle.css", "fanbox_icon.png"],
      matches: [],
    },
  ],
};

export default manifest;
