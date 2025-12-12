<script lang="ts">
  import ProjectCard from '$lib/components/projects/ProjectCard.svelte';

  const { data } = $props()
</script>

<div class="bg-linear-to-b from-(--color-background) px-5 flex flex-col self-center">
  <h1>Posts</h1>
  
  <div class="flex flex-row gap-4">
    <ul class="flex flex-col gap-2">
      {#each data.posts as post }
        <li class="list-none">
            <a href="/blog/{post.slug}">{post.title}</a>
        </li> 
      {/each}
    </ul>
  </div>
</div>
