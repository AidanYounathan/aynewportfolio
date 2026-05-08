import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "../public/images");

const PROJECTS = [
  {
    url: "https://younathanapokemonapireactbuild.vercel.app/",
    filename: "oneDex.png",
  },
  {
    url: "https://ay-tyler-fan-redo.vercel.app",
    filename: "tylerImg.png",
  },
  {
    url: "https://cvygcheck.vercel.app/kiosk",
    filename: "cvygCheck.png",
  },
  {
    url: "https://seledon-literacy.pages.dev/",
    filename: "seledonLiteracy.png",
  },
  {
    url: "https://brownissuestv.org/",
    filename: "brownIssues.png",
  },
];

async function screenshot({ url, filename }) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto(url, { waitUntil: "networkidle" });
  const dest = path.join(OUTPUT_DIR, filename);
  await page.screenshot({ path: dest, fullPage: false });
  await browser.close();
  console.log(`✓ ${filename}`);
}

for (const project of PROJECTS) {
  await screenshot(project);
}
