<script lang="ts">
	import type { ClassValue } from "svelte/elements";
    import Newspaper from "virtual:icons/heroicons/newspaper"
    import CommandLine16Solid from "virtual:icons/heroicons/command-line-16-solid"

</script>
 <nav class=" h-12 bg-[#2E6F40] flex place-content-between items-center px-[15px] sticky top-0">
    <span class="text-[2rem] font-[mono] select-none  text-black visited:text-black">
      <a title="HomePage"  class="cursor-pointer" href="/">SZ</a>
    </span>
    <ul class="flex flex-row">
         <li>
            <a href="/blog">
                <Newspaper 
                    name="Blog" 
                    class="text-[2rem] text-primary"
                />
            </a>
        </li>
        <li>
            <a href="/projects">
                <CommandLine16Solid 
                    name="Projects" 
                    class="text-[2rem] text-primary"
                />
            </a>
        </li>
    </ul>
</nav>