import React from "react";
import { createContext, useState } from "react";
import { api } from "../../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [users, setUsers] = React.useState([]);
	const [donation, setDonation] = React.useState([]);


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
		
		getDonations();
	}, []);

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

	return (
		<AuthContext.Provider value={{ users, donation, getUsers, getDonations}}>
			{children}
		</AuthContext.Provider>
	);
};
