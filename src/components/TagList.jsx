import posts from '../data/dbPosts.js'
import style from '../css/modules/TagList.module.css'


function tagList() {
    let tagsPost = [];


    function tagColor(tag) {
        switch (tag) {
            case "html":
                return "bg-pink-500";
            case "css":
                return "bg-cyan-500";
            case "js":
                return "bg-yellow-500";
            case "php":
                return "bg-gray-400";
            default:
                return "bg-green-500";
        }
    }


    posts.forEach((post) => {
        post.tags.forEach((tag) => {
            if (!tagsPost.includes(tag)) {
                tagsPost.push(tag);
            }
        });
    });

    return (
        <ul className={style.ul}>
            {tagsPost.map((tag, index) => (

                <li key={index}>
                    <div className={`${tagColor(tag)} px-4 py-1 rounded-3xl`}>{tag}</div>
                </li>

            ))}
        </ul>
    );
}

export default tagList;