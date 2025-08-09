import { test } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('Accessibility - homepage', () => {
  test('has no detectable a11y issues on load', async ({ page }) => {
    await page.goto('/');
    await injectAxe(page);
    await checkA11y(page, undefined, {
      detailedReport: true,
      detailedReportOptions: { html: true },
      // You can disable individual rules temporarily if needed:
      // axeOptions: { rules: [{ id: 'color-contrast', enabled: false }] },
    });
  });
});
