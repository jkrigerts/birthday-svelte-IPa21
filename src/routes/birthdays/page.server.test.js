import { describe, it, expect } from 'vitest';
import { load } from './+page.server.js';

describe('Function load()', () => {
	let listOfBirthdays = [
		{
			name: 'Hercules',
			dob: '1994-03-15'
		},
		{
			name: 'Athena',
			dob: '2001-08-27'
		}
	];
	it('passes, returns data', async () => {
		const result = await load();
		expect(result.birthdays).toEqual(listOfBirthdays);
	});
});
