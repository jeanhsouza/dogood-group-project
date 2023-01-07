import React, { useState } from "react";
import DonationModal from "../../../components/DonationModal";
import StyledProfileHeader from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../context/AuthContext";

const ProfileHeader = ({ user, totalRaised }) => {
	if (!user) return null;

	const [showModal, setShowModal] = useState(false);
	function openModal() {
		setShowModal(!showModal);
	}
	function notify() {
		toast("Doação realizada com sucesso!");
	}

	return (
		<>
			<StyledProfileHeader>
				{showModal ? (
					<DonationModal
						openModal={openModal}
						setShowModal={setShowModal}
						notify={notify}
						user={user}
					/>
				) : null}
				<ToastContainer />
				<section className="cardSection">
					<h1>{user.name.toUpperCase()}</h1>

					<div className="profileCard">
						<div className="profileImage">
							<img src={user.image} alt={user.name} />
						</div>

						<button onClick={openModal} className="profileBtn">
							DOE AGORA
						</button>

						<div className="profileInfo">
							<div className="stats">
								<h2>Nossa meta:</h2>
								<span>$ {user.goal.toLocaleString()}</span>
							</div>
							<div className="stats">
								<h2>Arrecadados:</h2>
								<span>$ {totalRaised.raised.toLocaleString()}</span>
							</div>
						</div>
					</div>
				</section>

				<section className="ourCauseSection">
					<h2>NOSSA CAUSA</h2>

					<p>{user.description}</p>
				</section>
			</StyledProfileHeader>
		</>
	);
};

export default ProfileHeader;
