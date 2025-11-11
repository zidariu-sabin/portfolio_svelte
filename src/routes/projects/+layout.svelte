<script lang="ts">
	import '../../app.css';
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<!-- <link rel="icon" href={favicon} /> -->
<div class="w-2/3 h-full flex flex-col">
	<!-- <Navbar class="h-12 top-0" /> -->
	{@render children()}
</div>	

