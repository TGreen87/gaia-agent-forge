import { test, expect } from '@playwright/test';

// Basic smoke checks for the current Vite app

test.describe('Home smoke', () => {
  test('loads home and shows key UI', async ({ page }) => {
    await page.goto('/');

    // Title exists
    await expect(page).toHaveTitle(/GAIA|Green AI|Automation|GAIA/i);

    // Header/nav present
    const header = page.getByRole('banner');
    await expect(header).toBeVisible();

    // Primary CTA: Download Playbook
    const playbook = page.getByRole('link', { name: /download playbook/i });
    await expect(playbook).toBeVisible();

    // Secondary: Book/Call (allows different copies)
    const book = page.getByRole('link', { name: /book|discovery|call/i }).first();
    await expect(book).toBeVisible();
  });
});
