import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit'; 

export async function load ({params}) {
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