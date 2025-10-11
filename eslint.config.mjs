import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["template files/**", ".next/**", "node_modules/**"],
  },
  // Disallow inline style={{ ... }} usage across the codebase
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      "react/forbid-component-props": [
        "error",
        {
          forbid: [
            // Prevent inline styles for maintainability and caching
            { propName: "style", message: "Avoid inline styles; use Tailwind classes or CSS variables" },
          ],
        },
      ],
    },
  },
  // Allow style prop in Instagram gallery as requested by the user
  {
    files: ["components/instagram-gallery.tsx"],
    rules: {
      "react/forbid-component-props": "off",
    },
  },
];

export default eslintConfig;
