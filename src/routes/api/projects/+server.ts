import { json } from '@sveltejs/kit';
import type { ProjectSchema } from '$lib/shared/types';

async function getProjects() {
    let projects: ProjectSchema[] = [];

    const paths = import.meta.glob('$lib/content/projects/*.md', {eager: true });
    
    for (const path in paths) {
        const file = paths[path];
        
        if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as ProjectSchema;
			const project = metadata
            projects.push(project);
		}
    }

    return projects
}

export async function GET() {
    const projects = await getProjects();
    return json(projects)
}