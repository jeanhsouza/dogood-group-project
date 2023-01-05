import { StyledCard } from "./style";
import { api } from "../../../services/api";
import { Button } from "../../Button/index";

const PostCard = ({ title, description, idPost }) => {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQG1haWwuY29tIiwiaWF0IjoxNjcyOTM5ODc4LCJleHAiOjE2NzI5NDM0NzgsInN1YiI6IjMifQ.IrrGHa798-JrhRQaOK0es6XjukuU5UuXKpHZmm63qZM";
    async function deletePost(){
        try{
            const data = await api.delete(`/posts/${idPost}`,{
            headers:{
                Authorization: `Bearer: ${token}`
            }
            })
        }catch(err){
            console.log(err)
        }
    }

    return(
        <StyledCard>
            <img src="https://i.pinimg.com/originals/bd/a5/be/bda5be61177acdb5fd46c3219f8b81a0.jpg" alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
            <Button 
                type={""} 
                name={"Deletar"} 
                onclick={deletePost()}
                buttonSize={"default"}
                buttonStyle={"brand1"}
            />
        </StyledCard>
    );
}
export default PostCard;