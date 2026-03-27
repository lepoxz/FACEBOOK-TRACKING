import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { config } from "dotenv";

const ENV_CANDIDATES = [
  resolve(process.cwd(), ".env"),
  resolve(process.cwd(), "../../.env"),
  resolve(process.cwd(), "../../../.env")
];

let loaded = false;

export function loadEnv() {
  if (loaded) {
    return;
  }

  for (const envPath of ENV_CANDIDATES) {
    if (existsSync(envPath)) {
      config({ path: envPath });
      loaded = true;
      return;
    }
  }

  config();
  loaded = true;
}
