// Cloudflare Workers compatibility entrypoint.
// Re-export the actual VLESS worker implementation so the project
// works with the repository's current wrangler.toml configuration.
export { default } from "../Vless_workers_pages/_worker.js";
