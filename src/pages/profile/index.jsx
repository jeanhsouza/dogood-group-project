import { useParams } from "react-router-dom";
import ProfileHeader from "./profile/ProfileHeader";
import { StyledProfile } from "./style";

const Profile = () => {
    const {id} = useParams()
    
	return (
		<StyledProfile>
            {id}
            <ProfileHeader/>
		</StyledProfile>
	);
};

export default Profile;
