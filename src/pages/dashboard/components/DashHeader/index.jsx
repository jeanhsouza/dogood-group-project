import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { StyledDashboardHeader } from "./style";

const DashboardHeader = () => {
    const {users} = useContext(AuthContext)
    const idLocal = localStorage.getItem("@USER:ID")

    const actualONG = users.find(user => user.id === +idLocal)
    
    return (
        <StyledDashboardHeader>
            <div>
                <h1>{actualONG?.name.toUpperCase()}</h1>
            </div>
        </StyledDashboardHeader>
    );
};

export default DashboardHeader;