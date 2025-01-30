<script lang="ts">
	let {
		buttonText,
		onClick,
		isLoading,
		isDisabled
	}: { buttonText: String; onClick: () => Promise<any>; isLoading: boolean; isDisabled: boolean } =
		$props();
</script>

<button
	class="border-2 border-primary-600
    {isLoading
		? 'text-slate-700 bg-primary-300'
		: 'hover:text-slate-100 hover:bg-primary-700'}  transition duration-300 py-2 px-4 w-full w-full rounded"
	onclick={onClick}
	disabled={isLoading}
>
	<div class=" flex items-center justify-center">
		{#if isLoading}
			<svg
				class="animate-spin h-5 w-5"
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
			{buttonText}
		{/if}
	</div>
</button>
