import HomeContact from "./components/HomeContact";
import Footer from "./components/HomeFooter";
import { StyledHomePage } from "./style";
import HomeList from "./components/HomeList";

const HomePage = () => {
	return (<StyledHomePage>
        <header className="HomeHeader"></header>
        <HomeList/>
        <HomeContact/>
        <Footer/>
    </StyledHomePage>);
};

export default HomePage;
