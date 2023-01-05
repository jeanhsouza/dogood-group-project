import HomeContact from "./components/HomeContact";
import Footer from "./components/HomeFooter";
import Header from "../../components/Header/Header";
import HomeHeader from "./components/HomeHeader";
import HomeList from "./components/HomeList";
import { StyledHomePage } from "./style";

const HomePage = () => {
	return (<StyledHomePage>
        <Header/>
        <HomeHeader/>
        <HomeList/>
        <HomeContact/>
        <Footer/>   
    </StyledHomePage>);
};

export default HomePage;
