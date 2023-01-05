import { StyledButton } from "./style";
export const Button = ({type, name, onclick, buttonSize, buttonStyle}) =>{
    return(
        <StyledButton 
            type={type} 
            onClick={()=>{onclick}}
            buttonSize={buttonSize}
            buttonStyle={buttonStyle}
        >{name}</StyledButton>
    )
}