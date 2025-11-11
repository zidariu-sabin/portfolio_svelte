
<script lang="ts">
  import type { ProjectSchema } from '../../shared/types';
  import PresentationchartLine from "virtual:icons/heroicons/presentation-chart-line";
  import GitHub from "virtual:icons/devicon/github";

  export let project: ProjectSchema;
</script>
  <div class="border rounded-[10px] p-2 w-[65ch]">
    {project?.Title}
    <div class= "flex flex-row justify-between items-center mx-2">
      <a href={project?.Url}>{ project?.Title }</a>
      <div>
        {#if  project?.Label =='building'}
            <a href={ project?.Url}>
            <GitHub name="devicon:github" class="cursor-pointer" />
            </a>
        {/if}
        
        <!-- test   -->
      <PresentationchartLine name="heroicons:presentation-chart-line" class="cursor-pointer" />
      </div>
    </div>
    <p>{  project?.Description }</p>
    <ul class="list-none grid grid-cols-4 gap-2 items-center">
      {#each project?.Languages as language,i}
        <li
        class="flex flex-row items-center gap-2"
      >
        <svg width="10" height="10">
          <circle cx="5" cy="5" r="4" fill={language.Color} />
        </svg>

        <div class="flex flex-row flex-grow gap-5">
          <span>{ language.Name }</span>
          <span class="text-gray-slate-600">{ language.Size }%</span>
        </div>
      </li>
      {/each}
    </ul>

    <div class="flex flex-row w-full h-[8px] border border-gray-600 rounded-[0.375rem]">
      <!-- <span
        v-for="(language, i) in project.languages"
        :key="i"
        class="inline-block h-4"
        :style="{ width: language.size + '%', backgroundColor: language.color }"
      ></span> -->
    </div>
  </div>
