import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { DashContext } from "../../../../context/DashContext";
import { StyledDashboardHeader } from "./style";

const DashboardHeader = () => {
    const { users } = useContext(AuthContext)
    const { currentUser } = useContext(DashContext)
    const idLocal = localStorage.getItem("@USER:ID")

    const actualONG = users.find(user => user.id === +idLocal)

    return (
        <StyledDashboardHeader>
            <div>
                <h1>{currentUser?.name.toUpperCase()}</h1>
            </div>
        </StyledDashboardHeader>
    );
};

export default DashboardHeader;