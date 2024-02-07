import { expect, test } from '@playwright/test';

//Taisām testu
// Pārbaudīs lapu
// Vārdus
test('lists all birthdays on the route', async ({ page }) => {
	await page.goto('/birthdays'); // Headless browser
	await expect(page.getByText('Hercules')).toBeVisible();
	await expect(page.getByText('Athena')).toBeVisible();
});
