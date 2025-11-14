
<script lang="ts">
  import type { ProjectSchema, LanguageSchema } from '../../shared/types';
  import PresentationchartLine from "virtual:icons/heroicons/presentation-chart-line";
  import GitHub from "virtual:icons/devicon/github";

  let {project} = $props<{project: ProjectSchema}>();

</script>
  <div class="border rounded-[10px] p-2 w-[65ch]">
      <div class= "flex flex-row justify-between items-center mx-2">
      <a href={project?.Url}>{ project?.Title }</a>
      <div class="flex flex-row gap-4">
        {#if  project?.Label =='building'}
            <a href={ project?.Url}>
            <GitHub to="{project?.Url}" name="devicon:github" class="cursor-pointer" />
            </a>
        {/if}
        
      <PresentationchartLine name="heroicons:presentation-chart-line" class="cursor-pointer" />
      </div>
    </div>
    <p>{  project?.Description }</p>
    <ul class="list-none grid grid-cols-4 gap-2 items-center">
      {#each project?.Languages as language}
        <li
        class="flex flex-row items-center gap-2"
      >
        <svg width="10" height="10">
          <circle cx="5" cy="5" r="4" fill={language.Color} />
        </svg>

        <div class="flex flex-row grow gap-5">
          <span>{ language.Name }</span>
          <span class="text-gray-slate-600">{ language.Size }%</span>
        </div>
      </li>
      {/each}
    </ul>

    <div class="flex flex-row w-full h-2 border border-gray-600 rounded-md">
        {#each project.Languages as language}
      <div 
      style="width: {language.Size}%; background-color: {language.Color};"
        ></div>
        {/each}
    </div>
  </div>
