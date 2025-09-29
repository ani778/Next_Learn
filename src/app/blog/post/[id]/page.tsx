import { posts } from '../../../lib/placeholder-data';
import Post from '../../../ui/components/posts/Post';

export default async  function Page({ params }: {params: Promise<{ id: string }>}) {
    const { id } = await params;
    const post = posts.find((post) => post.id === id)

    return (
        <>
            <h1>Post</h1>
            <ul>{post && <Post {...post} />}</ul>
        </>
    )
}