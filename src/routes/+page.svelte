<script lang="ts">
	import RunButton from '../components/buttons/RunButton.svelte';
	import IconButton from '../components/buttons/IconButton.svelte';
	import ProgressBar from '../components/ProgressBar.svelte';

	let isLoadingRun: boolean = $state(false);
	let isLoadingIcon: boolean = $state(false);

	let diceRoll: number = $state(0);
	async function roll() {
		const response = await fetch('/custom_functions');
		diceRoll = await response.json();
	}
</script>

<div class="grid grid-cols-1 gap-4 text-center">
	<div>
		<p>this is the home page.</p>
	</div>
	<div class="flex">
		<div class="w-20">
			<RunButton buttonText="Roll" onClick={roll} isDisabled={false} isLoading={isLoadingRun} />
		</div>
		<p class="m-auto">
			{diceRoll}
		</p>
	</div>
	<div>
		<IconButton buttonText="Icon" onClick={roll} isDisabled={false} isLoading={isLoadingIcon} />
	</div>
	<div>
		<ProgressBar progress={25} />
	</div>
</div>
