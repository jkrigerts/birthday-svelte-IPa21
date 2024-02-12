const db = [];

function addNew(person) {
	db.push(person);
}

addNew({
	name: 'Hercules',
	dob: '1994-03-15'
});

addNew({
	name: 'Athena',
	dob: '2001-08-27'
});

export async function load() {
	return {
		birthdays: db
	};
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		addNew({
			name: data.get('name'),
			dob: data.get('dob')
		});
	}
};
