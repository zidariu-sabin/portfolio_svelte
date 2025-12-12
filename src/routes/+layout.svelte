<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<!-- <link rel="icon" href={favicon} /> -->
<div class="w-full h-screen flex flex-col overflow-x-visible">
	<Navbar />
	{@render children?.()}
</div>	

