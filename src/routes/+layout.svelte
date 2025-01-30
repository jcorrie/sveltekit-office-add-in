<script lang="ts">
	import '../app.css';
	import { fly } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import DarkThemeButton from '../components/DarkThemeButton.svelte';
	let { children } = $props();
	let isOpen = $state(false);

	function toggleMenu() {
		isOpen = !isOpen;
	}
	const pages = [
		{ name: 'Home', path: '/' },
		{ name: 'Powerpoint', path: '/powerpoint_example' },
		{ name: 'Word', path: '/word_example' },
		{ name: 'Excel', path: '/excel_example' }
	];
</script>

<div class="relative z-0">
	<nav class="bg-slate-400 relative dark:bg-slate-800 h-10 z-10">
		<div class="flex">
			<button
				class="p-2 transition hover:text-primary-700 dark:hover:text-primary-300"
				onclick={toggleMenu}
			>
				<span class="sr-only">Open main menu</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
				</svg>
			</button>

			<div class="ml-auto mx-4 flex items-center">
				<DarkThemeButton />
			</div>
		</div>
	</nav>

	{#if isOpen}
		<div
			transition:fly={{ y: -150, easing: sineInOut, duration: 500, opacity: 1 }}
			class="menu-container absolute top-8 w-48 shadow-lg rounded-r-md left-0 bg-gradient-to-r from-primary-600 to-80% to-primary-700 -z-150"
		>
			{#each pages as page}
				<a
					href={page.path}
					onclick={toggleMenu}
					class="block transition duration-300 px-4 py-2 text-slate-100 hover:bg-primary-800"
					>{page.name}</a
				>
			{/each}
		</div>
	{/if}
</div>

{@render children()}
