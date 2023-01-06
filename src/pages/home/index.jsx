import HomeContact from "./components/HomeContact";
import Footer from "./components/HomeFooter";
import Header from "../../components/Header/Header";
import HomeHeader from "./components/HomeHeader";
import HomeList from "./components/HomeList";
import { StyledHomePage } from "./style";
import AsideMenu from "../../components/AsideMenu";
import { useState } from "react";
import DonationModal from "../../components/DonationModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomePage = () => {
  const [ showModal, setShowModal ] = useState(false)


    function openModal () {
        setShowModal(!showModal)
    }

    function notify () {toast("Doação realizada com sucesso!")}

    
    return (
      <StyledHomePage>
      <ToastContainer/>
      <button onClick={openModal}>showModal</button>
    {(showModal ? <DonationModal openModal={openModal} setShowModal={setShowModal} notify={notify} /> : null)}
      <HomeHeader />
      <HomeList />
      <HomeContact />
      <Footer />
    </StyledHomePage>
  );
};

export default HomePage;
