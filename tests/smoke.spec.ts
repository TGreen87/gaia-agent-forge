import { test, expect } from '@playwright/test';

// Basic smoke checks for the Next app

test.describe('Home smoke', () => {
  test('loads home and shows key UI', async ({ page, browserName }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/GAIA|Green AI|Automation/i);

    const header = page.getByRole('banner');
    await expect(header).toBeVisible();

    const playbook = page.getByRole('link', { name: /download playbook/i });
    await expect(playbook).toBeVisible();

    const book = page.getByRole('link', { name: /book|discovery|call/i }).first();
    await expect(book).toBeVisible();

    // Visual snapshot per project
    await expect(page).toHaveScreenshot(`home-${browserName}.png`, { fullPage: true, animations: 'disabled' });
  });
});

test.describe('Route smoke', () => {
  const routes = ['/services', '/why-gaia', '/learning-hub', '/projects', '/about', '/contact'];
  for (const route of routes) {
    test(`navigates to ${route} and captures screenshot`, async ({ page, browserName }) => {
      await page.goto(route);
      const heading = page.getByRole('heading').first();
      await expect(heading).toBeVisible();
      await expect(page).toHaveScreenshot(`${route.replace(/\//g, '')}-${browserName}.png`, { fullPage: true, animations: 'disabled' });
    });
  }
});
