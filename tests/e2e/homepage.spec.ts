import { expect, test } from '@playwright/test';

test.describe('homepage smoke tests', () => {
  test('loads the homepage title', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('projectopenspec');
    await expect(page.getByRole('heading', { name: 'projectopenspec' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'View the project on GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/hdasari0506-sudo/projectopenspec',
    );
  });
});
