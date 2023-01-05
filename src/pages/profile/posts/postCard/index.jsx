import { StyledCard } from "./style";
const PostCard = () =>{

    function deletePost(){
        console.log("função de deletar!");
    }


    return(
        <StyledCard>
            <img src="https://i.pinimg.com/originals/bd/a5/be/bda5be61177acdb5fd46c3219f8b81a0.jpg" alt="" />
            <h2>Gadering Ideas</h2>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <button onClick={()=>{deletePost()}}>Deletar</button>
        </StyledCard>
    )
}
export default PostCard;