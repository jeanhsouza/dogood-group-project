import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [users, setUsers] = React.useState([]);
	const [donation, setDonation] = React.useState([]);
	const navigate = useNavigate();


	React.useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		try {
			const res = await api.get("users", {
				headers: {
					"Content-Type": "application/json",
				},
			});
			const json = await res.data;

			setUsers(json);
		} catch (error) {
			console.log(error);
		}
	};

	React.useEffect(() => {
		const getDonations = async () => {
			try {
				const res = await api.get(`donations`, {
					headers: {
						"Content-Type": "application/json",
					},
				});
				const json = await res.data;

				setDonation(json);
			} catch (error) {
				console.log(error);
			}
		};
		getDonations();
	}, []);

	const userLogout = () => {
		localStorage.clear();
		navigate("/login");
	}

	return (
		<AuthContext.Provider value={{ users, donation, userLogout }}>
			{children}
		</AuthContext.Provider>
	);
};
