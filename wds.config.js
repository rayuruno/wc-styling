import { esbuildPlugin } from "@web/dev-server-esbuild";

export default {
  watch: true,
  nodeResolve: true,
  rootDir: ".",
  plugins: [esbuildPlugin({ target: "esnext", loaders: { ".mcss": "text" } })],
};
