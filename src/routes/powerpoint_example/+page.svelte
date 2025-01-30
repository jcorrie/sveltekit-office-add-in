<script lang="ts">
	import RunButton from '../../components/buttons/RunButton.svelte';
	import { addSlide } from '../../add-in/example_powerpoint';
	let isLoading: boolean = $state(false);
</script>

<h1 class="bg-secondary-500">This is a powerpoint page.</h1>

<div class="w-12 h-6">
	<RunButton buttonText="Add slide" onClick={addSlide} {isLoading} isDisabled={false} />
</div>
