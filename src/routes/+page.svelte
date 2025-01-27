<script lang="ts">
	import RunButton from '../components/buttons/RunButton.svelte';
	import IconButton from '../components/buttons/IconButton.svelte';

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
		<RunButton buttonText="Run" onClick={run} />
	</div>
	<div>
		<IconButton buttonText="Icon" onClick={roll} />
	</div>
</div>
