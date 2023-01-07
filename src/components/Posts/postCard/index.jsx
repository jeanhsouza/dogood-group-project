import { Children, useContext } from "react";
import { StyledCard } from "./style";
import { DashContext } from "../../../context/DashContext";
import  Modal  from "../postModal";
import { Button } from "../../Button";

const PostCard = ({ title, description, image, children }) => {
    const { modal } = useContext(DashContext);
    return(
        <>
            {modal && <Modal/>}
            <StyledCard>
                <img src={image} alt="" />
                <h2>{title.toUpperCase()}</h2>
                <p>{description}</p>
                {children}
            </StyledCard>
        </>
    );
}
export default PostCard;