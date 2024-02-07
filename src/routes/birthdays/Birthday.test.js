import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Birthday from './Birthday.svelte';

describe('Birthday', () => {
	it('has the name of a person', () => {
		render(Birthday, { name: 'Hercules' });
		expect(screen.queryByText('Hercules')).toBeVisible();
	});
	it('has the name of an another person', () => {
		render(Birthday, { name: 'Athena' });
		expect(screen.queryByText('Athena')).toBeVisible();
	});
});
