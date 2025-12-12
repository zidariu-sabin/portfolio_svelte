import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export async function load ({params}) {
  try {
    const post = await import(`$lib/content/posts/${params.slug}.md`);
    return{
      metadata: post.metadata,
      content: post.default
    }
} catch (e){
    error(404, `Post ${params.slug} not found`);
  }
  
}