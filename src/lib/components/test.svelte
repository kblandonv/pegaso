<script>
	import { onMount } from 'svelte';

	let selectRegion;
	let selectCountry;
	let selectCity;

	let selectedData = 'Not selected';

	const data = [
		{
			region: 'Europe',
			country: 'Spain',
			city: 'Madrid'
		},
		{
			region: 'Europe',
			country: 'Spain',
			city: 'Barcelona'
		},
		{
			region: 'Europe',
			country: 'France',
			city: 'Paris'
		},
		{
			region: 'Europe',
			country: 'France',
			city: 'Lyon'
		},
		{
			region: 'America',
			country: 'USA',
			city: 'New York'
		},
		{
			region: 'America',
			country: 'USA',
			city: 'Miami'
		},
		{
			region: 'America',
			country: 'Canada',
			city: 'Toronto'
		},
		{
			region: 'America',
			country: 'Canada',
			city: 'Vancouver'
		}
	];

	function addOptions(element, options) {
		options.forEach((option) => {
			const optionElement = document.createElement('option');
			optionElement.value = option;
			optionElement.textContent = option;
			element.appendChild(optionElement);
		});
	}

	onMount(() => {
		// Add all regions to the region select
		addOptions(selectRegion, [...new Set(data.map((item) => item.region))]);

		selectRegion.addEventListener('change', () => {
			// Get all countries from the selected territory
			const countries = data
				.filter((item) => item.region === selectRegion.value)
				.map((item) => item.country);

			// Remove all options from the country select
			selectCountry.innerHTML = '';

			// Add the new options to the country select
			addOptions(selectCountry, [...new Set(countries)]);

			selectCountry.dispatchEvent(new Event('change'));
		});

		selectCountry.addEventListener('change', () => {
			// Get all capitals from the selected country
			const capitals = data
				.filter((item) => item.country === selectCountry.value)
				.map((item) => item.city);

			// Remove all options from the capital select
			selectCity.innerHTML = '';

			// Add the new options to the capital select
			addOptions(selectCity, [...new Set(capitals)]);

			selectCity.dispatchEvent(new Event('change'));
		});

		selectCity.addEventListener('change', () => {
			selectedData = `${selectRegion.value}, ${selectCountry.value}, ${selectCity.value}`;
		});

		// Dispatch change event to start
		selectRegion.dispatchEvent(new Event('change'));
	});
</script>

<section>
	<h5>Selected city: {selectedData}</h5>

	<div>
		<label for="region">Region</label>
		<select id="region" bind:this={selectRegion}></select>
	</div>

	<div>
		<label for="country">Country</label>
		<select id="country" bind:this={selectCountry}></select>
	</div>

	<div>
		<label for="city">Capital</label>
		<select id="city" bind:this={selectCity}></select>
	</div>
</section>