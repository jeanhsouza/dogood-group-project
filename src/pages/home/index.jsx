
import Header from "../../components/Header/Header";
import HomeHeader from "./components/HomeHeader";
import { StyledHomePage } from "./style";

const HomePage = () => {
	return (<StyledHomePage>
        {/* <header className="HomeHeader">A</header> */}
        <Header/>
        <HomeHeader/>
        <section className="HomeList"></section>
        <section className="HomeContact"></section>
        <footer></footer>
    </StyledHomePage>);
};

export default HomePage;
