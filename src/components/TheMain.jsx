import posts from '../data/dbPosts.js'
import Card from './card'

// console.log(posts);
const TheMain = () => {
    return (
        <main className='grid grid-cols-4 gap-5'>

            {posts.map((post) => {
                if (post.published) {
                    return (
                        <Card

                            key={post.id}
                            post={post}
                        />
                    );
                }
                // return null;
            })}
        </main>
    )
}

export default TheMain;