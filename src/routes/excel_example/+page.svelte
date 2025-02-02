<script lang="ts">
	import { onMount } from 'svelte';
	import RunButton from '../../components/buttons/RunButton.svelte';
	import { writeToCell } from '../../add-in/example_excel';
	import SearchBar from '../../components/SearchBar.svelte';
	import init, { greet, regex_extract } from '../../../wasm/pkg/wasm.js';

	let isLoading: boolean = false;
	let isLoadingBar: boolean = false;
	let searchText: string = $state('');

	onMount(async () => {
		await init();
		let response = greet('WebAssembly');
		console.log(response);
		let extracted = regex_extract(String.raw`\d{2}`, '1234d56lkj0');
		console.log(extracted);
	});

	async function handleClick() {
		console.log('clicked');
		isLoading = true;
		// wait 1 second before resetting the isLoading state
		setTimeout(() => {
			writeToCell();
			isLoading = false;
		}, 1000);
		console.log('isLoading', isLoading);
	}

	async function searchFunction() {
		console.log('Searching...');
		isLoading = true;
		// wait 1 second before resetting the isLoading state
		setTimeout(() => {
			console.log(searchText);
			isLoading = false;
		}, 1000);
		console.log('isLoading', isLoading);
	}
</script>

<div class="grid grid-flow-row-dense grid-cols-3 gap-y-2">
	<p class="col-span-3">Hello I am Excel!</p>
	<div class="col-span-3">
		<div class="w-32 h-8">
			<RunButton buttonText="Write cell" onClick={handleClick} {isLoading} isDisabled={false} />
		</div>
	</div>
	<div class="col-span-3">
		<div class="mx-1 my-2">
			<SearchBar
				placeholderText="Search..."
				{searchFunction}
				isLoading={isLoadingBar}
				bind:searchText
			/>
		</div>
	</div>
</div>
