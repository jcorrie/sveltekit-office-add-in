<script lang="ts">
	import { getHighlightedText } from '../../add-in/example_word';
	import SearchBar from '../../components/buttons/SearchBar.svelte';
	import RunButton from '../../components/buttons/RunButton.svelte';
	let isLoadingButton: boolean = $state(false);
	let isLoadingBar: boolean = $state(false);
	let selectedText: String = $state('');
	async function handleClick() {
		console.log('`handleClick` function called');
		const text: String | null = await getHighlightedText();
		if (text) {
			console.log('Selected text is:', text);
			selectedText = text;
		}
	}
</script>

<div class="flex">
	<p>Hello I am Word!</p>
	<div class="w-28 h-6 m-2">
		<RunButton
			buttonText="Print"
			onClick={handleClick}
			isDisabled={false}
			isLoading={isLoadingButton}
		/>
	</div>
	<div>
		<p>Selected text is: {selectedText}</p>
	</div>
	<SearchBar placeholderText="Search..." searchFunction={handleClick} isLoading={isLoadingBar} />
</div>
