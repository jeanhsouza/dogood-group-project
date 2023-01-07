import React from "react";
import PostsList from "../../components/Posts";
import ProfileHeader from "./profileHeader";
import StyledProfile from "./style";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
	const { users, donation} = React.useContext(AuthContext);
	const { id } = useParams();

	const user = users.find((user) => user.id === +id);
	const totalRaised = donation.find((user) => user.userId === +id)

	return (
		<StyledProfile>
			<ProfileHeader user={user} totalRaised={totalRaised} />
			<PostsList
				titleList={"POSTAGENS"} 
				actualId={id}
                name={"LER MAIS"}
				style={"brand2"}
               	size={"default"}
                click={()=>console.log("deu")}
            />	
		</StyledProfile>
	);
};

export default Profile;
