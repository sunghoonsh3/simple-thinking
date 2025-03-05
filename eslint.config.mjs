import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: { extends: ["eslint:recommended"] },
});

// Use a more explicit config instead of directly extending
const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals"],
    // Make sure we're not including any function values
    parserOptions: {
      // Explicitly set parser options without functions
      ecmaVersion: 2022,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
  }),
];

export default eslintConfig;
