<script lang="ts">
	export let buttonText: string;
	export let onClick: () => Promise<void>;

	let isLoading = false;

	async function handleClick() {
		isLoading = true;
		await onClick();
		// wait 1 second before resetting the isLoading state
		setTimeout(() => {
			isLoading = false;
		}, 1000);
	}
</script>

<div class="flex items-center justify-center">
	<button
		class="border-2 border-primary-600
    {isLoading
			? 'text-slate-700 bg-primary-200'
			: 'hover:text-slate-100 hover:bg-primary-700'} rounded-full transition duration-300 m-1"
		on:click={handleClick}
		disabled={isLoading}
	>
		<div class="h-6 w-6 m-1 items-center justify-center">
			{#if isLoading}
				<svg
					class="animate-spin"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			{:else}
				<svg class="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						fill="currentColor"
						d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
					/>
				</svg>
			{/if}
		</div>
	</button>
</div>
