<script lang="ts">
import type { PageProps } from './$types';
import { onMount } from 'svelte';

const { data }: PageProps = $props();


</script>
<h1>{data.metadata.title}</h1>
<div>
	<data.content></data.content>
</div>