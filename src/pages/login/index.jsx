import { useState } from "react";
import DonationModal from "../../components/DonationModal";
import { StyledLogin } from "./style";

const Login = () => {

    const [ showModal, setShowModal ] = useState(false)
    function openModal () {
        setShowModal(!showModal)
    }

	return (<StyledLogin>
        <h1>Login</h1>
        <button onClick={openModal}>showModal</button>
        {(showModal ? <DonationModal openModal={openModal} /> : null)}
    </StyledLogin>);
};

export default Login;
