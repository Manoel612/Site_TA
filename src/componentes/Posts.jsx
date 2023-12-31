/* array context conjunto de posts */

import { useContext } from "react";

import Post from './Post';
import Context from "../contexto/postContext";

const Posts = () => {

    const [posts, setPosts] = useContext(Context); // array contexto

    return (
        posts.map((post,id) => (
            <Post
                key={id}
                comida={post.txtComida}
                sentimento={post.txtSent}
                catImg={post.gato}
                // "props" = "paramametros"
            />
        ))
    )
}


export default Posts;