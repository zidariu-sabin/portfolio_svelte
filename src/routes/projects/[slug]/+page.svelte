<script lang="ts">
import type { PageProps } from './$types';
import { onMount } from 'svelte';

const { data }: PageProps = $props();


</script>
<h1>{data.metadata.Title}</h1>
<div>
	<data.content/>
</div>