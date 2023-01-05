import React from 'react'
import { StyledDonationModal } from './style'

const DonationModal = ( { openModal } ) => {


    // const [ showModal, setShowModal ] = useState(false)
    // function openModal () {
    //     setShowModal(!showModal)
    // }

    // <button onClick={openModal}>showModal</button>
    // {(showModal ? <DonationModal openModal={openModal} /> : null)}








  return (
    <StyledDonationModal>
        <div className='modalWrapper'>
            <div className='headerContainer'>
                <div className='titleContainer'>
                    <h1 className='title'>NOME DA ONG</h1>
                </div>
                <button className='closeButton' onClick={openModal} >X</button>
            </div>
            <h2 className='descriptionContainer'>Formulário de doação</h2>
            <form className='donationForm' action="submit" noValidate>
                <input type="text" placeholder='Nome'/>
                <input type="text" placeholder='Telefone'/>
                <input type="text" placeholder='Quanto deseja doar?'/>
                <input type="text" placeholder='E-mail'/>
                <input type="text" placeholder='Número do cartão'/>
                <input className='cardInput' type="text" placeholder='MM/YY'/>
                <input className='cardInput' type="text" placeholder='CVC'/>
            </form>
            <button className='donationButton'>DOAR AGORA</button>
        </div>
    </StyledDonationModal>
  )
}

export default DonationModal