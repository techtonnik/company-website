// When the site is built under a sub-path (e.g. GitHub Pages at /company-website/),
// prefix every root-relative URL in the generated HTML and CSS with that base.
// Source code keeps plain "/path" links, so dev and a custom-domain deploy need no changes.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

async function* files(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* files(path);
    else if (/\.(html|css|xml)$/.test(entry.name)) yield path;
  }
}

export default function basePath() {
  let base = '/';
  return {
    name: 'base-path',
    hooks: {
      'astro:config:done': ({ config }) => { base = config.base.replace(/\/?$/, '/'); },
      'astro:build:done': async ({ dir }) => {
        if (base === '/') return;
        const prefix = base.slice(0, -1); // "/company-website"
        // Root-relative only: "/x" but not "//x" and not already prefixed.
        const rel = `/(?!/|${prefix.slice(1)}/)`;
        const attr = new RegExp(`(\\s(?:href|src|poster|action|content)=["'])${rel}`, 'g');
        const srcset = new RegExp(`((?:srcset=["']|,\\s*))${rel}`, 'g');
        const cssUrl = new RegExp(`(url\\(\\s*["']?)${rel}`, 'g');
        const refresh = new RegExp(`(url=)${rel}`, 'g');
        for await (const file of files(fileURLToPath(dir))) {
          const before = await readFile(file, 'utf8');
          const after = before
            .replace(attr, `$1${prefix}/`)
            .replace(srcset, `$1${prefix}/`)
            .replace(cssUrl, `$1${prefix}/`)
            .replace(refresh, `$1${prefix}/`);
          if (after !== before) await writeFile(file, after);
        }
      },
    },
  };
}
