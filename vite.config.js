import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Public org Pages: https://snorkel-ai.github.io/copperhead-ec-guidelines/
// Private repos get a random *.pages.github.io URL instead — make the repo
// public for the org.github.io/<repo>/ address.
const REPO_BASE = "/copperhead-ec-guidelines/";

export default defineConfig({
  base: REPO_BASE,
  plugins: [react()],
});
