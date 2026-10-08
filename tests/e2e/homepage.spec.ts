import { expect, test } from '@playwright/test';

test.describe('dogday.com', () => {
  test('shows the homepage, navigation, and featured guides', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('dogday.com — Good days start with good dog care');
    await expect(page.getByRole('heading', { name: 'For the love of good dogs.' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Breeds' })).toHaveAttribute('href', '#breeds');
    await expect(page.getByRole('heading', { name: 'Good reads for good dogs.' })).toBeVisible();
    await expect(page.getByRole('searchbox', { name: 'Search dog breeds' })).toBeVisible();
  });

  test('combines size, temperament, and live breed search filters', async ({ page }) => {
    await page.goto('/#breeds');

    const smallFilter = page.getByRole('button', { name: 'Small', exact: true });
    await smallFilter.focus();
    await page.keyboard.press('Enter');
    await expect(smallFilter).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: 'Friendly', exact: true }).click();
    await page.getByRole('button', { name: 'Calm', exact: true }).click();

    await expect(page.getByText('Showing 2 breeds')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'French Bulldog' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Cavalier King Charles Spaniel' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Dachshund' })).toBeHidden();

    await page.getByRole('searchbox', { name: 'Search dog breeds' }).fill('cavalier');
    await expect(page.getByText('Showing 1 breed')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Cavalier King Charles Spaniel' })).toBeVisible();

    await page.getByRole('searchbox', { name: 'Search dog breeds' }).fill('not a breed');
    await expect(page.getByText('No breeds found. Try another search or clear a filter.')).toBeVisible();

    await page.getByRole('button', { name: 'All sizes' }).click();
    await page.getByRole('button', { name: 'Friendly', exact: true }).click();
    await page.getByRole('button', { name: 'Calm', exact: true }).click();
    await page.getByRole('searchbox', { name: 'Search dog breeds' }).fill('');
    await expect(page.getByText('Showing 6 breeds')).toBeVisible();
  });

  test('updates body-language signals and actionable tips when a state is selected', async ({ page }) => {
    await page.goto('/#behavior');

    await page.getByRole('button', { name: /Anxious or stressed/ }).click();
    const details = page.locator('#behavior-details');
    await expect(details.getByRole('heading', { name: 'Anxious or stressed' })).toBeVisible();
    await expect(details.getByText('asking for more space', { exact: false })).toBeVisible();
    await expect(page.getByRole('button', { name: /Anxious or stressed/ })).toHaveAttribute('aria-pressed', 'true');

    await page.getByRole('button', { name: /Alert or uncomfortable/ }).click();
    await expect(details.getByText(/Do not reach for, corner, scold, or test the dog/)).toBeVisible();
  });

  test('tracks daily care completion and restores it after reload', async ({ page }) => {
    await page.goto('/#health');

    await expect(page.getByText('0 of 4 complete')).toBeVisible();
    await page.getByLabel('Serve their regular meals').check();
    await expect(page.getByText('1 of 4 complete')).toBeVisible();
    await expect(page.getByText('25%', { exact: true })).toBeVisible();

    await page.reload();
    await expect(page.getByLabel('Serve their regular meals')).toBeChecked();
    await expect(page.getByText('1 of 4 complete')).toBeVisible();
  });

  test('shows educational symptom guidance and emergency direction', async ({ page }) => {
    await page.goto('/#health');

    await expect(page.getByRole('complementary', { name: 'Important veterinary disclaimer' })).toContainText('educational purposes only');
    await expect(page.getByText('does not diagnose, treat, or replace advice from your veterinarian', { exact: false })).toBeVisible();

    await page.getByLabel('What are you noticing?').selectOption('breathing');
    const result = page.locator('#symptom-result');
    await expect(result.getByText('Emergency veterinary care now')).toBeVisible();
    await expect(result.getByRole('heading', { name: 'Breathing difficulty is an emergency' })).toBeVisible();
    await expect(result).toContainText('Call an emergency veterinary clinic now');

    await page.getByLabel('What are you noticing?').selectOption('scratching');
    await expect(result.getByText('Arrange a routine vet visit')).toBeVisible();
  });

  test('opens and closes the mobile navigation after a section is selected', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const toggle = page.getByRole('button', { name: 'Open navigation menu' });
    const breedsLink = page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Breeds' });
    await expect(breedsLink).toBeHidden();

    await toggle.click();
    await expect(page.getByRole('button', { name: 'Close navigation menu' })).toHaveAttribute('aria-expanded', 'true');
    await expect(breedsLink).toBeVisible();
    await breedsLink.click();

    await expect(page).toHaveURL(/#breeds$/);
    await expect(page.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false');
    await expect(breedsLink).toBeHidden();
    await expect(page.locator('body')).toHaveJSProperty('scrollWidth', 390);
  });
});
