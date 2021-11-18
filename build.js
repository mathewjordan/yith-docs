const { build } = require("esbuild");

build({
  bundle: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development",
    ),
  },
  logLevel: "info",
  platform: "node",
  entryPoints: ["src/index.jsx"],
  minify: false,
  outfile: "public/script.js",
});