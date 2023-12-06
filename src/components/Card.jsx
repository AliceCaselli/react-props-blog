import style from "../css/modules/Card.module.css"
import TagList from "./TagList"


export default function Card({ post }) {
    // console.log(post);
    // function tagColor(tag) {
    //     switch (tag) {
    //         case "html":
    //             return "bg-pink-800";
    //         case "css":
    //             return "bg-cyan-800";
    //         case "js":
    //             return "bg-yellow-500";
    //         case "php":
    //             return "bg-gray-400";
    //         default:
    //             return "bg-green-500";
    //     }
    // }


    return (

        <div className={style.card}>
            <img className={style.img} src={post.image} alt="" />
            <div className={style.text}>

                <h5 className={style.h5}>{post.title}</h5>
                <TagList />
                <p className={style.p}>{post.content}</p>
                <button className={style.btn}>TheButton</button>
            </div>
        </div>
    );
}