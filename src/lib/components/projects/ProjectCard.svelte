
<script lang="ts">
  import type { ProjectSchema, LanguageSchema } from '../../shared/types';
  import PresentationchartLine from "virtual:icons/heroicons/presentation-chart-line";
  import GitHub from "virtual:icons/devicon/github";
  let {project}: {project: ProjectSchema} = $props();

</script> 
  <div class="border rounded-[10px] p-2 w-[65ch]">
      <div class= "flex flex-row justify-between items-center mx-2">
      <a href={'/projects/'+project?.title}>{ project?.title }</a>
      <div class="flex flex-row gap-4">
        {#if  project?.label =='building'}
            <a href={ project?.url}>
            <GitHub name="devicon:github" class="cursor-pointer" />
            </a>
        {/if}
        
      <PresentationchartLine name="heroicons:presentation-chart-line" class="cursor-pointer" />
      </div>
    </div>
    <p>{  project?.description }</p>
    <ul class="list-none grid grid-cols-4 gap-2 items-center">
      {#each project?.languages as language}
        <li
        class="flex flex-row items-center gap-2"
      >
        <svg width="10" height="10">
          <circle cx="5" cy="5" r="4" fill={language.color} />
        </svg>

        <div class="flex flex-row grow gap-2">
          <span>{ language.name }</span>
          <span class="text-gray-slate-600">{ language.size }%</span>
        </div>
      </li>
      {/each}
    </ul>

    <div class="flex flex-row w-full h-2 border border-gray-600 rounded-md">
        {#each project.languages as language}
      <div 
      style="width: {language.size}%; background-color: {language.color};"
        ></div>
        {/each}
    </div>
  </div>
