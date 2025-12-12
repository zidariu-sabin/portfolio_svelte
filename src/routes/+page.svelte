
<script lang="ts">
    import VueJs from "virtual:icons/devicon/vuejs";
    import Nuxt from "virtual:icons/devicon/nuxt";
    import NodejsWordmark from "virtual:icons/devicon/nodejs-wordmark";
    // import Strapi from "virtual:icons/devicon/strapi";
    // import Restapi from "virtual:icons/devicon/restapi";
    import Javascript from "virtual:icons/devicon/javascript";
    import Typescript from "virtual:icons/devicon/typescript";
    import Apollographql from "virtual:icons/devicon/apollographql";
    import Mysql from "virtual:icons/devicon/mysql";
    import Tailwindcss from "virtual:icons/devicon/tailwindcss";
    import Bootstrap from "virtual:icons/devicon/bootstrap";
    import Symfony from "virtual:icons/devicon/symfony";
    import Php from "virtual:icons/devicon/php";
    import CypressioWordmark from "virtual:icons/devicon/cypressio-wordmark";
    import Ubuntu from "virtual:icons/devicon/ubuntu";
    import Git from "virtual:icons/devicon/git";
    import ProfilePicture from '$lib/assets/profile_picture.png';
</script>

<main class="flex flex-col items-center justify-center   h-full w-full text-start bg-linear-to-b from-(--color-background) ">
    <div class="w-[85ch]  flex flex-col items-center ">
        <div class="h-[200px] w-[200px] border-2 rounded-full select-none" >
            <img src={ProfilePicture} alt="Profile" class="rounded-full h-full w-full object-cover" />
        </div>
            <div class=" flex flex-col items-center justify-center px-2.5">
                <h1>Who am I ?</h1>
                <p>
                    My name is Sabin Zidariu.</p>
                    <p>

                    Motivated and adaptable Fullstack Developer with hands-on experience building and maintaining responsive  data-driven
                    web applications in high-paced development teams. Proven ability to learn new technologies quickly and contribute to
                    collaborative solutions. Strong focus on code quality  user experience  and aligning with business goals. Eager to grow
                    professionally and contribute meaningfully in dynamic development environments
                    </p>
        </div>
        <div></div>
        <div></div>
        <h1>Tech Stack</h1>
        <div class="flex flex-wrap justify-center gap-4 px-2.5">
            <span>Vue <VueJs class="cursor-pointer" />  </span>
            <span>Nuxt <Nuxt class="cursor-pointer" />  </span>
            <span>NodeJs <NodejsWordmark class="cursor-pointer" />  </span>
            <!-- <span>Strapi <Icon name="devicon:strapi" class="cursor-pointer" />  </span> -->
            <!-- <span>Rest API <Icon name="devicon:restapi" class="cursor-pointer" />  </span> -->
            <span>JavaScript <Javascript  class="cursor-pointer" />  </span>
            <span>TypeScript <Typescript  class="cursor-pointer" />  </span>
            <span>Apollo GraphQL <Apollographql  class="cursor-pointer" />  </span>
            <span>SQL <Mysql  class="cursor-pointer" />  </span>
            <span>Tailwind CSS <Tailwindcss  class="cursor-pointer" />  </span>
            <span>Bootstrap <Bootstrap  class="cursor-pointer" />  </span>
            <span>Symfony <Symfony  class="cursor-pointer" />  </span>
            <span>PHP <Php  class="cursor-pointer" />  </span>
            <span>Cypress <CypressioWordmark class="cursor-pointer" />  </span>
            <span>Linux <Ubuntu  class="cursor-pointer" />  </span>
            <span>Git <Git  class="cursor-pointer" />  </span>
        </div>
    </div>
</main>
