import { StyledHomePage } from "./style";
import HomeList from "./components/HomeList";

const HomePage = () => {
	return (
		<StyledHomePage>
			<header className="HomeHeader"></header>
			<HomeList />
			<section className="HomeContact"></section>
			<footer></footer>
		</StyledHomePage>
	);
};

export default HomePage;
