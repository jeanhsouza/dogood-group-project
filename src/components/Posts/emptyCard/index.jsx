import { StyledEmptyCard } from "./style";

const EmptyCard = ({ emptyMessage }) =>{

    if(emptyMessage == null){
        return 
    } else {
        return(
            <StyledEmptyCard>
              <h3>{ emptyMessage }</h3>  
            </StyledEmptyCard>  
        )
    }
}

export default EmptyCard;