import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  { languageOptions: { globals: globals.node }, ignores: ["node_modules/", "out/"] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];