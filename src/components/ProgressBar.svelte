<script lang="ts">
	let {
		progress = $bindable()
	}: {
		progress: number;
	} = $props();
</script>

<div>
	<span id="ProgressLabel" class="sr-only">Loading</span>

	<span
		role="progressbar"
		aria-labelledby="ProgressLabel"
		aria-valuenow={progress}
		class="relative block rounded-full bg-gray-200"
	>
		<span class="absolute inset-0 flex items-center justify-center text-[10px]/4">
			<span class="font-bold text-white"> {progress}% </span>
		</span>

		<span class="block h-4 rounded-full bg-indigo-600 text-center" style="width: {progress}%"> </span>
	</span>
</div>
