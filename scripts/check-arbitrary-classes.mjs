#!/usr/bin/env node
/**
 * design.md §8 enforcement: "Do not use arbitrary values (text-[#xxxxxx], mt-[37px]) —
 * extend the theme instead. Tokens or nothing."
 *
 * Scans all class attributes in .astro / .ts / .tsx source for Tailwind arbitrary-value
 * utilities (the `-[...]` bracket syntax) and fails the build if any are found.
 *
 * A small, version-independent guard — works the same on Tailwind v3 or v4.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const ROOT = new URL('../src', import.meta.url).pathname;
const EXTENSIONS = new Set(['.astro', '.ts', '.tsx']);

// Matches a Tailwind utility carrying an arbitrary value, e.g. bg-[#fff], mt-[37px],
// text-[14px], w-[200px], lg:top-[10%], hover:bg-[var(--x)]. Also matches arbitrary
// properties like [mask-type:luminance].
const ARBITRARY =
  /(?:^|[\s"'`])((?:[a-z][a-z0-9-]*:)*-?[a-z][a-z0-9-]*-\[[^\]\s]+\]|\[[a-z-]+:[^\]\s]+\])/g;

/** Pull the contents of class / class:list / className attributes out of a source file. */
function extractClassStrings(src) {
  const out = [];
  const attr = /\bclass(?:Name|:list)?\s*=\s*(?:"([^"]*)"|'([^']*)'|\{([^}]*)\})/g;
  let m;
  while ((m = attr.exec(src)) !== null) {
    out.push(m[1] ?? m[2] ?? m[3] ?? '');
  }
  return out;
}

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else if (EXTENSIONS.has(extname(full))) files.push(full);
  }
  return files;
}

const violations = [];
for (const file of walk(ROOT)) {
  const src = readFileSync(file, 'utf8');
  for (const classStr of extractClassStrings(src)) {
    let m;
    ARBITRARY.lastIndex = 0;
    while ((m = ARBITRARY.exec(classStr)) !== null) {
      violations.push({ file: file.replace(ROOT, 'src'), token: m[1].trim() });
    }
  }
}

if (violations.length > 0) {
  console.error('\n✖ Arbitrary Tailwind values found (design.md §8 forbids these).');
  console.error('  Add the value to the design system, then use a token utility.\n');
  for (const v of violations) console.error(`  ${v.file}: ${v.token}`);
  console.error(`\n${violations.length} violation(s).\n`);
  process.exit(1);
}

console.log('✓ No arbitrary Tailwind values. Everything traces to a token.');
