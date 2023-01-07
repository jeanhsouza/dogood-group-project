import { useState } from "react";
import { BiPlus, BiEditAlt, BiLogOut, BiUserCircle } from "react-icons/bi";
import { StyledButton } from "../../../../styles/buttons";
import DashNewPostForm from "./DashNewPostForm";
import DashProfileForm from "./DashProfileForm";
import { StyledDashControlPanel } from "./style";

const DashControlPanel = () => {
    const [profileActive, setProfileActive] = useState(false);
    const [addPostActive, setAddPostActive] = useState(false);
    const [logoutActive, setLogoutActive] = useState(false);

    const showEditProfile = () => {
        setAddPostActive(false);
        setProfileActive(!profileActive);
    };

    const showNewPost = () => {
        setProfileActive(false);
        setAddPostActive(!addPostActive);
    };


    return (
        <StyledDashControlPanel>
            <div>
                <div>
                    <StyledButton
                        buttonSize="default"
                        buttonStyle={profileActive ? "primaryActive" : "primaryDefault"}
                        onClick={showEditProfile}>
                        <span>
                            <BiUserCircle />
                        </span>
                    </StyledButton>
                    <StyledButton
                        buttonSize="default"
                        buttonStyle={addPostActive ? "primaryActive" : "primaryDefault"}
                        onClick={showNewPost}>
                        <span>
                            <BiPlus />
                        </span>
                    </StyledButton>
                    <StyledButton buttonSize="default" buttonStyle="primaryDefault" >
                        <span>
                            <BiLogOut />
                        </span>
                    </StyledButton>

                </div>
                <div>
                    <h2>{true ? "FAZER POSTAGEM" : "META: 40.000$"}</h2>
                    {!true && <h2>ARRECADADO: 60.000$</h2>}
                </div>
            </div>


            {profileActive && <DashProfileForm />}
            {addPostActive && <DashNewPostForm />}


        </StyledDashControlPanel>
    );
};

export default DashControlPanel;