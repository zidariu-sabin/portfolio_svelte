<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
</script>

<!-- <link rel="icon" href={favicon} /> -->
<div class="w-2/3 h-full flex flex-col">
	{@render children()}
</div>	

