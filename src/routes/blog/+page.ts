import type { PostSchema } from "$lib/shared/types";
export async function load ({fetch}) {
    const response = await fetch('/api/posts');
    const posts: PostSchema[] = await response.json();
    return {
        posts
    }
}
