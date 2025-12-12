import { json } from '@sveltejs/kit';
import type { PostSchema } from '$lib/shared/types';

async function getPosts() {
    let posts: PostSchema[] = [];

    const paths = import.meta.glob('$lib/content/posts/*.md', {eager: true });
    
    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<PostSchema, 'slug'>
			const post = { ...metadata, slug } satisfies PostSchema
            if(post.published) posts.push(post)
		}
    }

    return posts
}

export async function GET() {
    const posts = await getPosts();
    return json(posts)
}