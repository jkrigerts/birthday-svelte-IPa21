import { expect, test } from '@playwright/test';

test('Sagaida virsrakstu ❤️', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading')).toHaveText('Welcome to SvelteKit');
});
