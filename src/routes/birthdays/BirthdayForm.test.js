import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import BirthdayForm from './BirthdayForm.svelte';

describe('BirthdayForm', () => {
	it('has a form element', () => {
		render(BirthdayForm);
		expect(screen.queryByRole('form')).toBeVisible();
	});

	it('has a method POST', () => {
		render(BirthdayForm);
		expect(screen.queryByRole('form').method).toEqual('post');
	});

	it('has a button', () => {
		render(BirthdayForm);
		expect(screen.queryByRole('button')).toBeVisible();
	});

	it('has an input for name', () => {
		render(BirthdayForm);
		expect(
			screen.queryByLabelText('Name', {
				selector: 'input[type=text]'
			})
		).toBeVisible();
	});

	it('has an input for date of birth', () => {
		render(BirthdayForm);
		expect(
			screen.queryByLabelText('Date of birth', {
				selector: 'input[type=date]'
			})
		).toBeVisible();
	});
});
