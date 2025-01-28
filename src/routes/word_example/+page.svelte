<script lang="ts">
	import { getHighlightedText } from '../../add-in/example_word';
	import RunButton from '../../components/buttons/RunButton.svelte';

	let selectedText: String = $state('');
	async function handleClick() {
		const text: String | null = await getHighlightedText();
		if (text) {
			selectedText = text;
		}
	}
</script>

<p>Hello I am Word!</p>
<RunButton buttonText="Get selected text" onClick={handleClick} />
<p>Selected text is: {selectedText}</p>
