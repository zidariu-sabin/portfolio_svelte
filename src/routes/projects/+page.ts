import type { ProjectSchema } from "$lib/shared/types";
export async function load ({fetch}) {
    const response = await fetch('/api/projects');
    const projects: ProjectSchema[] = await response.json();
    return {
        projects
    }
}
