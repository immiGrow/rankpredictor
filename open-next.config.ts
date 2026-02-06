// @ts-nocheck
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // This tells OpenNext to NOT split the middleware into a separate worker
  middleware: {
    external: false,
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
    },
  },
});