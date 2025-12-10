import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

// export const load: PageLoad = ({params}) => {
//         return {
//             post: {
// 			title: `Title for ${params.slug} goes here`,
// 			content: `Content for ${params.slug} goes here`
// 		}
//         }
// }   

export async function load ({params}) {
  console.log('Loading project with slug:', params.slug);
  try {
    const project = await import(`$lib/content/projects/${params.slug}.md`);
    return{
      metadata: project.metadata,
      content: project.default
    }
} catch (e){
    error(404, `Project ${params.slug} not found`);
  }
  
}