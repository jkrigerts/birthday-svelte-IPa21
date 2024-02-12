import { expect, test } from '@playwright/test';

//Taisām testu
// Pārbaudīs lapu
// Vārdus
test('lists all birthdays on the route', async ({ page }) => {
	await page.goto('/birthdays'); // Headless browser
	await expect(page.getByText('Hercules')).toBeVisible();
	await expect(page.getByText('Athena')).toBeVisible();
});

test('saves and displays input data', async ({ page }) => {
	await page.goto('/birthdays');
	await page.getByLabel('Name').fill('Marčello Džeimsons');
	await page.getByLabel('Date of birth').fill('2005-04-06');
	await page.getByRole('button').click();
	await expect(page.getByText('Marčello Džeimsons')).toBeVisible();
	await expect(page.getByText('2005-04-06')).toBeVisible();
});
