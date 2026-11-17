import { existsSync } from "node:fs";
import path from "node:path";
import type { Case } from "./clientes";

/** Cover: the generated photo once it is in public/photos/cases/<slug>.jpg, else the provisional one. */
export function capaDoCase(c: Case) {
  const src = `/photos/cases/${c.slug}.jpg`;
  return existsSync(path.join(process.cwd(), "public", src)) ? src : c.capaProvisoria;
}
