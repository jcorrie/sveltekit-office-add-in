<script lang="ts">
	let {
		placeholderText,
		searchFunction,
		isLoading
	}: {
		placeholderText: string;
		searchFunction: (search: string) => Promise<any>;
		isLoading: boolean;
	} = $props();

	let searchQuery: string = $state('');
</script>

<input
	type="search"
	placeholder={placeholderText}
	class="border-1 border-slate-600 focus:ring-slate-800 focus:ring-1 text-slate-700 transition duration-300 py-2 px-4 w-full w-full rounded"
	onkeydown={(e) => e.key === 'Enter' && searchFunction(searchQuery)}
	bind:value={searchQuery}
/>
