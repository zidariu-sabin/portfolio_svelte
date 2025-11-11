<script lang="ts">
  import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
  import { PROJECTS_LIST } from '$lib/shared/shared.constant';
</script>

<div class="bg-linear-to-b from-[var(--color-background)] to-slate-50 h-[85vh] px-[20px] flex flex-col self-center">
  <h1>Projects</h1>
  <div class="flex flex-row gap-4">
    <ul class="flex flex-col gap-2">
      {#each PROJECTS_LIST as project}
        <li class="list-none">
          <ProjectCard {project} />
        </li>
      {/each}
    </ul>
  </div>
</div>
