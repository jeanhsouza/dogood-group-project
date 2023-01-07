import { Children, useContext, useEffect } from "react";
import { StyledPosts } from "./style";
import { DashContext } from "../../context/DashContext";
import { api } from "../../services/api";
import { Button } from "../Button";

import PostCard from "./postCard";

const PostsList = ({ titleList, actualId, name, style, size, click }) =>{
    const { postList, setPosts } = useContext(DashContext);
        
    useEffect(()=> {
        async function loadPosts() {
            const {data} = await api.get("/posts/?_expand=user");
            const actualList = data.filter(post => post.userId == actualId);
            setPosts(actualList);
        }
        loadPosts();  
    }, []);

    return( 
        <StyledPosts>
            <h3>{titleList.toUpperCase()}</h3> 
            <ul>
                {postList.map(({title, description, id, image })=>{
                    return <PostCard 
                        title={title} 
                        description={description} 
                        image={image} 
                        key={id} 
                        >   
                        <Button
                            name={name}
                            style={style}
                            size={size}
                            click={click}
                            idPost={id} 
                        />
                    </PostCard>
                })}
            </ul>
        </StyledPosts>
    )
}

export default PostsList