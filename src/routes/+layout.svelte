<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<!-- <link rel="icon" href={favicon} /> -->
<div class="w-full h-full flex flex-col">
	<Navbar class="h-12 top-0" />
	{@render children?.()}

</div>	

