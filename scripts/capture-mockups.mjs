// Captures fresh desktop + mobile screenshots of featured projects for the device mockups.
// (synergyx-*.jpg are manual screenshots of an internal tool and are not captured here.)
// Usage: npm run mockups            (all)
//        npm run mockups -- ontopo  (one)
import { chromium, devices } from 'playwright';

const sites = {
  ontopo: 'https://ontopo.com/en/rs/belgrade',
  tennilytics: 'https://www.tennilytics.com/',
  serblink: 'https://serblink.org/',
  zirtue: 'https://www.zirtue.com/',
  superstan: 'https://www.superstanbg.rs/',
  cinnamon: 'https://www.cinnamon.agency/',
  cognitika: 'https://cognitika.com/',
  codeit: 'https://www.codeit.rs/',
  zenith: 'https://www.thezenithdigital.com/',
  genroks: 'https://genroks.com/',
  kopirajter: 'https://kopirajter.rs/',
  trinity: 'https://www.trinitysmartit.com/',
  helixconnect: 'https://helix-connect.com/',
  tremium: 'https://tremium.net/',
};

const only = process.argv.slice(2);
const targets = Object.entries(sites).filter(([key]) => !only.length || only.includes(key));

// Best-effort dismissal of cookie/consent banners so they don't end up in the shot.
async function dismissBanners(page) {
  const labels = /^(accept( all)?|allow( all)?|agree|i agree|got it|ok|prihvati( sve)?|slažem se)$/i;
  const candidates = [...(await page.getByRole('button').all()), ...(await page.getByRole('link').all())];
  for (const el of candidates) {
    const text = (await el.innerText().catch(() => '')).trim();
    if (labels.test(text)) await el.click({ timeout: 1000 }).catch(() => {});
  }
}

async function shoot(browser, key, url, kind) {
  const context = await browser.newContext(
    kind === 'mobile'
      ? { ...devices['iPhone 13'] }
      : { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 },
  );
  const page = await context.newPage();
  // networkidle can hang on sites with long-polling; fall through on timeout.
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 }).catch(() => {});
  // Let autoplaying videos get past their first (often black) frames.
  await page.evaluate(() => document.querySelectorAll('video').forEach((v) => { v.muted = true; v.play().catch(() => {}); })).catch(() => {});
  await page.waitForTimeout(4000);
  // Some banners appear late, so try twice.
  await dismissBanners(page);
  await page.waitForTimeout(1500);
  await dismissBanners(page);
  await page.waitForTimeout(1000);
  const path = `public/mockups/${key}-${kind}.jpg`;
  await page.screenshot({ path, type: 'jpeg', quality: 82 });
  await context.close();
  console.log('saved', path);
}

// Prefer installed Google Chrome (has the codecs needed for hero videos); fall back to bundled Chromium.
const browser = await chromium.launch({ channel: 'chrome' }).catch(() => chromium.launch());
for (const [key, url] of targets) {
  await shoot(browser, key, url, 'desktop');
  await shoot(browser, key, url, 'mobile');
}
await browser.close();
