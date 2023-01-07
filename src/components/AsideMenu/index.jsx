import { Link } from "react-router-dom";
import Logo from "../../assets/img/left-logo-dark.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { AsideDiv, AsideFooter, ButtonDiv } from "./style";

const AsideMenu = () => {

	return (
		<AsideDiv>
			<div className="headerAside">
				<div>
					<img src={Logo} alt="" />
				</div>
			</div>

			<ButtonDiv>
				<Link to="/home" className="hoverUnderLineAnimation">
					HOME
				</Link>

				<Link to="/login" className="hoverUnderLineAnimation">
					LOGIN
				</Link>

				<Link to="/register" className="hoverUnderLineAnimation">
					REGISTER
				</Link>

				<Link to="/profile" className="hoverUnderLineAnimation">
					PROFILE
				</Link>

				<Link to="/dashboard" className="hoverUnderLineAnimation">
					DASHBOARD
				</Link>
			</ButtonDiv>

			<AsideFooter>
				<div className="socialMedia">
					<FaFacebookF />
					<FaTwitter />
					<ImInstagram />
				</div>

				<div className="divContact">
					<p>(**)*******-**</p>
					<p>doGood@mail.com</p>
				</div>
			</AsideFooter>
		</AsideDiv>
	);
};

export default AsideMenu;
