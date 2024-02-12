import { describe, it, expect } from 'vitest';
import { load, actions } from './+page.server.js';
import { createFormDataRequest } from '../../factories/formDataRequest.js';

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
describe('Function actions()', () => {
	it('saves data to DB', async () => {
		let request = createFormDataRequest({
			name: 'Jārcis',
			dob: '2005-03-12'
		});

		await actions.default({ request });
		const result = await load();
		expect(result.birthdays);
	});
});
