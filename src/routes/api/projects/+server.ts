import { json } from '@sveltejs/kit';
import type { ProjectSchema } from '$lib/shared/types';

// async function getProjects() {
//     let projects: ProjectSchema[] = [];

//     const paths = import.meta.glob('$lib/content/projects/*.json', {eager: true });

//     for (const path in paths    ) {
//         const file = paths[path];
//         const slug = path.split('/').at(-1)?.replace('.md', '')
//         if (file && typeof file === 'object' && 'metadata' in file) {
// 			const metadata = file.metadata as ProjectSchema;
// 			const project = { ...metadata } satisfies ProjectSchema
// 			// post.published && posts.push(post)
// 		}
//     }

//     return projects
// }