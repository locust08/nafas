import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  accountId: "e7c515dde995479daacd82ad79dfc3e8",
  worker: defineWorker({
    name: "nafas-bajakimia-site",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-10-07",
    compatibilityFlags: ["nodejs_compat"],
    assets: { notFoundHandling: "none" },
    env: {
      ASSETS: bindings.assets(),
      NAFAS_SITE_URL: bindings.text(
        "https://nafas-bajakimia-site.easondev.workers.dev",
      ),
    },
  }),
});
