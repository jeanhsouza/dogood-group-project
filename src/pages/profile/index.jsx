import React, { useState, useContext } from "react";
import PostsList from "../../components/Posts";
import ProfileHeader from "./profileHeader";
import StyledProfile from "./style";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import DonationModal from "../../components/DonationModal";
import ProfilePostModal from "./profilePostModal";
import { DashContext } from "../../context/DashContext";

const Profile = () => {
	const { users, donation} = React.useContext(AuthContext);
	const {openProfilePost, modalPost} = useContext(DashContext)
	const { id } = useParams();

	const user = users.find((user) => user.id === +id);
	const totalRaised = donation.find((user) => user.userId === +id);

	const [showModal, setShowModal] = useState(false);

	function openModal() {
		setShowModal(!showModal);
	}	

	return (
		<StyledProfile>
			{showModal ? (
					<DonationModal
						openModal={openModal}
						setShowModal={setShowModal}
						user={user}
					/>
				) : null}
			{modalPost && <ProfilePostModal/>}	
			<ProfileHeader user={user} totalRaised={totalRaised} openModal={openModal}/>
			<PostsList
				titleList={"POSTAGENS"} 
				actualId={id}
                name={"LER MAIS"}
				style={"brand2"}
               	size={"default"}
                click={openProfilePost}
            />	
		</StyledProfile>
	);
};

export default Profile;
