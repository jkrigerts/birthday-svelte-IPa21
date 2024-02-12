import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Page from './+page.svelte';

describe('Route /birthdays', () => {
	let listOfBirthdays = {
		birthdays: [
			{
				name: 'Hercules',
				dob: '1994-03-15'
			},
			{
				name: 'Athena',
				dob: '2001-08-27'
			}
		]
	};
	it('displays received data', () => {
		render(Page, { data: listOfBirthdays });
		expect(screen.queryByText('Hercules')).toBeVisible();
	});

	it('displays the form', () => {
		render(Page, { data: listOfBirthdays });
		expect(screen.getByRole('form')).toBeVisible();
	});
});
