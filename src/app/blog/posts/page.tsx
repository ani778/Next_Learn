import Post from '../../ui/components/posts/Post';
import { connectToDB, getPosts } from "@/src/app/lib/data.ts";
import { Button } from "../../ui/components/button.tsx";
import { auth } from '../../../../auth.config.ts'
import Link from 'next/link';


export default async function Page() {
    const client = await connectToDB();
    const posts = await getPosts();
    const session = await auth();

    return (
        <>
            { client && <p className='text-green-500'>Connected to database</p> }
            {
                session?.user && <Link href="/blog/post/insert">
                    <Button className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">New +</Button>
                </Link>
            }

            <h1 className="text-2xl font-bold text-purple-800 mb-4">Posts</h1>
            <ul>
                {
                     posts?.map((post) => <Post key={post.id} {...post}/>)
                }
            </ul>

        </>

    )
}