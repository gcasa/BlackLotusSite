import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../out/", import.meta.url);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const html = await readFile(new URL("index.html", output), "utf8");

test("exports the complete site as HTML without a running application server", () => {
  assert.match(html, /<title>Black Lotus Incorporated/);
  for (const name of ["MacBasic", "PupPad", "ScoreMaker", "SalonSync", "ScrubBit"]) {
    assert.ok(html.includes(name), `Missing product: ${name}`);
  }
  for (const id of ["top", "work", "services", "approach", "contact"]) {
    assert.ok(html.includes(`id="${id}"`), `Missing anchor: ${id}`);
  }
  assert.ok(html.includes('href="mailto:greg.casamento@gmail.com"'));
  assert.ok(html.includes(`${process.env.NEXT_PUBLIC_SITE_URL || "https://gcasa.github.io"}${basePath}/og.png`));
});

test("exports assets and uses paths compatible with the deployment prefix", async () => {
  const assetPaths = new Set();
  for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    const path = match[1];
    if (!path.startsWith("/")) continue;
    assert.ok(path.startsWith(`${basePath}/`), `Asset escaped base path: ${path}`);
    // Product archives are supplied separately; verify their URLs below.
    if (path.includes("/downloads/")) continue;
    assetPaths.add(path.slice(basePath.length + 1).split("?")[0]);
  }
  assert.ok(assetPaths.has("black-lotus-logo.png"));
  assert.ok([...assetPaths].some((path) => path.endsWith(".css")));
  for (const path of assetPaths) await access(new URL(path, output));
  for (const file of ["MacBasic.zip", "ScoreMaker.zip", "ScrubBit.zip"]) {
    assert.ok(html.includes(`href="${basePath}/downloads/${file}"`));
  }
  assert.ok(html.includes('href="https://salonsync.duckdns.org"'));
});
