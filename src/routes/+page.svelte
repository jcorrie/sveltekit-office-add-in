<script lang="ts">
	import RunButton from '../components/buttons/RunButton.svelte';
	import IconButton from '../components/buttons/IconButton.svelte';

	let isLoadingRun: boolean = $state(false);
	let isLoadingIcon: boolean = $state(false);
	async function run(): Promise<void> {
		console.log('run');
	}

	async function roll() {
		const response = await fetch('/custom_functions');
		console.log(await response.json());
	}
</script>

<div class="grid grid-cols-1 gap-4">
	<div>
		<p>this is the home page.</p>
	</div>
	<div>
		<RunButton buttonText="Run" onClick={run} isDisabled={false} isLoading={isLoadingRun} />
	</div>
	<div>
		<IconButton buttonText="Icon" onClick={roll} isDisabled={false} isLoading={isLoadingIcon} />
	</div>
</div>
