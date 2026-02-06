// @ts-nocheck
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // This tells OpenNext how to handle the edge runtime
  default: {
    runtime: "edge",
  },
  // This explicitly handles the middleware bundling
  middleware: {
    external: false,
  },
});