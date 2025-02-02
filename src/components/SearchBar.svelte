<script lang="ts">
	let {
		placeholderText,
		searchFunction,
		isLoading,
		searchText = $bindable()
	}: {
		placeholderText: string;
		searchFunction: () => Promise<any>;
		isLoading: boolean;
		searchText: string;
	} = $props();

</script>

<input
	type="search"
	placeholder={placeholderText}
	class="border-1 border-slate-600 focus:ring-slate-800 focus:ring-1 text-slate-700 transition duration-300 py-2 px-4 w-full w-full rounded"
	onkeydown={(e) => e.key === 'Enter' && searchFunction()}
	bind:value={searchText}
/>
