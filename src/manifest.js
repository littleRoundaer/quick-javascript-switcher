module.exports = {
  manifest_version: 2,
  name: "Quick Javascript Switcher 2",
  description: "The one-click JavaScript Switcher",
  version: process.env.VUE_APP_VERSION,
  minimum_chrome_version: "16.0",
  homepage_url: "https://github.com/maximelebreton/quick-javascript-switcher",
  permissions: [
    "contextMenus",
    "tabs",
    "contentSettings",
    "storage",
    "debugger",
  ],
  incognito: "spanning",
  background: {
    scripts:
      process.env.NODE_ENV === "production"
        ? ["/js/background.js"]
        : ["/js/background.js", "/hot-reload.js"],
    persistent: false,
  },
  icons: {
    16: "icons/logo-16.png",
    48: "icons/logo-48.png",
    128: "icons/logo-128.png",
    256: "icons/logo-256.png",
  },
  browser_action: {
    default_icon: "icons/disabled@2x.png",
  },
  options_ui: {
    page: "options.html",
    chrome_style: false,
  },
  options_page: "options.html",
  content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
  commands: {
    _execute_browser_action: {
      suggested_key: {
        default: "Alt+Shift+Q",
        windows: "Alt+Shift+Q",
        mac: "Alt+Shift+Q",
      },
    },
  },
};