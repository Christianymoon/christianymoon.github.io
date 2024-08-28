

const filters = document.getElementById('filters-logos');
const button = document.getElementById('projects-button');

button.addEventListener('click', () => {
	if (filters.style.display == 'none') {
		filters.style.display = 'flex';
	} else {
		filters.style.display = 'none';
	}

})
