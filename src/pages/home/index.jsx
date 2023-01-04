
import HomeHeader from "./components/HomeHeader/HomeHeader";
import { StyledHomePage } from "./style";

const HomePage = () => {
	return (<StyledHomePage>
        {/* <header className="HomeHeader">A</header> */}
        <HomeHeader/>
        <section className="HomeList"></section>
        <section className="HomeContact"></section>
        <footer></footer>
    </StyledHomePage>);
};

export default HomePage;
