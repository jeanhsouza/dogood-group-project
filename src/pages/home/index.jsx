import HomeContact from "./components/HomeContact";
import Footer from "./components/HomeFooter";
import Header from "../../components/Header/Header";
import HomeHeader from "./components/HomeHeader";
import HomeList from "./components/HomeList";
import { StyledHomePage } from "./style";
import AsideMenu from "../../components/AsideMenu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = () => {   
    return (
      <StyledHomePage>
        <ToastContainer/>
        <HomeHeader />
        <HomeList />
        <HomeContact />
        <Footer />
      </StyledHomePage>
  );
};

export default HomePage;
