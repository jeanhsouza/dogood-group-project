import { useState, useContext } from "react";
import { BiPlus, BiLogOut, BiUserCircle } from "react-icons/bi";
import { AuthContext } from "../../../../context/AuthContext";
import { StyledButton } from "../../../../styles/buttons";
import DashNewPostForm from "./DashNewPostForm";
import DashProfileForm from "./DashProfileForm";
import { StyledDashControlPanel } from "./style";

const DashControlPanel = () => {
    const [profileActive, setProfileActive] = useState(true);
    const [addPostActive, setAddPostActive] = useState(false);

    const { users, donation, userLogout } = useContext(AuthContext)
    const idLocal = localStorage.getItem("@USER:ID")

    const actualONG = users.find(user => user.id === +idLocal)
    const totalRaised = donation.find((user) => user.userId === +idLocal);

    console.log(actualONG)

    const showEditProfile = () => {
        if (!profileActive) {
            setAddPostActive(!addPostActive);
            setProfileActive(!profileActive);
        }
    };

    const showNewPost = () => {
        if (!addPostActive) {
            setProfileActive(!profileActive);
            setAddPostActive(!addPostActive);
        }
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
                    <StyledButton buttonSize="default" buttonStyle="primaryDefault" onClick={userLogout}>
                        <span>
                            <BiLogOut />
                        </span>
                    </StyledButton>

                </div>
                <div>
                    <h2>{addPostActive ? "FAZER POSTAGEM" : `META: ${(+actualONG?.goal).toLocaleString()}$`}</h2>
                    {!addPostActive && <h2>ARRECADADO: {totalRaised ? totalRaised.raised.toLocaleString() : "0.00"}$</h2>}
                </div>
            </div>

            {profileActive && <DashProfileForm />}
            {addPostActive && <DashNewPostForm />}

        </StyledDashControlPanel>
    );
};

export default DashControlPanel;