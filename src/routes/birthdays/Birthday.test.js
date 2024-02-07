import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Birthday from './Birthday.svelte';

describe('Birthday', () => {
	const exampleData = {
		name: 'Zeus',
		dob: '2005-03-12'
	};

	it('has the name of a person', () => {
		render(Birthday, { ...exampleData, name: 'Hercules' });
		expect(screen.queryByText('Hercules')).toBeVisible();
	});
	it('has the name of an another person', () => {
		render(Birthday, { ...exampleData, name: 'Athena' });
		expect(screen.queryByText('Athena')).toBeVisible();
	});

	it('has the date of birth of a person', () => {
		render(Birthday, { ...exampleData, dob: '1994-03-15' });
		expect(screen.queryByText('1994-03-15')).toBeVisible();
	});

	it('has the date of birth of an another person', () => {
		render(Birthday, { ...exampleData, dob: '2001-08-27' });
		expect(screen.queryByText('2001-08-27')).toBeVisible();
	});
});
