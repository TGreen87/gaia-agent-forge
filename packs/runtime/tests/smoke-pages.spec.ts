import { test, expect } from '@playwright/test';
const pages=['/','/services','/why-gaia','/proof','/projects-and-demos','/wizard/pilot-plan','/about','/contact','/resources'];
for(const p of pages){
  test(`page renders H1 ${p}`, async ({ page }) => {
    await page.goto(`http://localhost:3000${p}`);
    await expect(page.locator('h1')).toHaveCount(1);
  });
}
