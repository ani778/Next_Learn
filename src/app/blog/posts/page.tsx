import { posts } from '../../lib/placeholder-data';
import Post from '../../ui/components/posts/Post'
export default function Page() {
    return (
        <>
            <h1 className="text-2xl font-bold text-purple-800 mb-4">Posts</h1>
            <ul>
                {
                    posts.map((post) => <Post key={post.id} {...post}/>)
                }
            </ul>

        </>

    )
}