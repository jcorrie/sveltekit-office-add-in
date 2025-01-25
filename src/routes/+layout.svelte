<script lang="ts">
	import '../app.css';
	import DarkThemeButton from '../components/DarkThemeButton.svelte';
	let { children } = $props();
	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}



</script>

<nav class="bg-slate-400">
	<div class="flex">
		<button class="p-2" onclick={toggleMenu}>
			<span class="sr-only">Open main menu</span>
			<!-- Hamburger icon -->
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16m-7 6h7"
				></path>
			</svg>
		</button>
		{#if isOpen}
			<div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
				<a href="/" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">home</a>
				<a href="/taskpane.html" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">taskpane</a
				>
			</div>
		{/if}
		<div class="ml-auto mx-4 flex items-center">
			<DarkThemeButton />
		</div>
	</div>
</nav>

{@render children()}
