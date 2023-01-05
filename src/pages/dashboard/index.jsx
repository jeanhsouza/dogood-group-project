import PostsList from "../../components/Posts";
import { StyledDashboard} from "./style";

const DashBoard = () => {
	return (<StyledDashboard>
        <PostsList titleList={"Minhas Postagens"}/>
    </StyledDashboard>);
};

export default DashBoard;
