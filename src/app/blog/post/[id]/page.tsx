// import { posts } from '../../../lib/placeholder-data';
import Post from '../../../ui/components/posts/Post';
import { connectToDB, getPosts } from "@/src/app/lib/data.ts";
import { notFound } from 'next/navigation';

export default async  function Page({ params }: {params: Promise<{ id: string }>}) {
    const client = await connectToDB();
    const posts = await getPosts();
    const { id } = await params;
    const post = posts?.find((post) => post.id === id)

    if(!post){
        notFound();
    }

    return (
        <>
            <h1>Post</h1>
            <ul>{post && <Post {...post} />}</ul>
        </>
    )
}