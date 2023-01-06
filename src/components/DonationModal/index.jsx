import React from "react"
import { StyledDonationModal } from "./style"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api"



const DonationModal = ( { openModal, setShowModal, notify, user } ) => {
    
    const donateSchema = yup.object().shape({
        // name: yup.string().required("Preencha o nome."),
        // phone: yup.string().required("Campo obrigatório"),
        // value: yup.number("Digite um número").required("Preencha o valor.").positive("O valor deve ser positivo"),
        // email: yup.string().required("Campo obrigatório"),
        // card: yup.string().required("Campo obrigatório"),
        // date: yup.string().required("Campo obrigatório"),
        // cvc: yup.string().required("Campo obrigatório"),
    })

    const { register, handleSubmit, formState: { errors } } =useForm({
        resolver: yupResolver(donateSchema),
    })

    async function donate ( data ) {
        try {
            const response = await api.post("/donations", data)
            console.log(response)
            notify()
            setShowModal(false)
        } catch (error) {
            console.error(error)
        } finally{
        }
    }

  return (
    <StyledDonationModal>
        <div className="modalWrapper">
            <div className="headerContainer">
                <div className="titleContainer">
                    <h1 className="title">{user.name}</h1>
                </div>
                <button className="closeButton" onClick={openModal} >X</button>
            </div>
            <h2 className="descriptionContainer">Formulário de doação</h2>
            <form onSubmit={handleSubmit(donate)} className="donationForm" action="" noValidate>
                <input type="text" placeholder="Nome" {...register("name")} />
                {errors.name?.message && <p className="error" aria-errormessage="">{errors.name.message}</p>}
                <input type="text" placeholder="Telefone" {...register("phone")}/>
                {errors.phone?.message && <p className="error" aria-errormessage="">{errors.phone.message}</p>}
                <input type="text" placeholder="Quanto deseja doar?" {...register("value")} />
                {errors.value?.message && <p className="error" aria-errormessage="">{errors.value.message}</p>}
                <input type="text" placeholder="E-mail" {...register("email")}/>
                {errors.email?.message && <p className="error" aria-errormessage="">{errors.email.message}</p>}
                <input type="text" placeholder="Número do cartão" {...register("card")}/>
                {errors.card?.message && <p className="error" aria-errormessage="">{errors.card.message}</p>}
                <input className="cardInput" type="text" placeholder="MM/YY" {...register("date")}/>
                {errors.date?.message && <p className="error" aria-errormessage="">{errors.date.message}</p>}
                <input className="cardInput" type="text" placeholder="CVC" {...register("cvc")}/>
                <button type="submit" className="donationButton">DOAR AGORA</button>
            </form>
        </div>
    </StyledDonationModal>
  )
}

export default DonationModal