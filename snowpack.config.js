/* eslint-disable no-undef */
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    public: "/linebot/",
    src: "/linebot/_dist",
  },
  plugins: [
    /* ... */
    "@snowpack/plugin-sass",
    "@snowpack/plugin-postcss",
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    metaUrlPath: "/linebot/_snowpack"
  },
};
