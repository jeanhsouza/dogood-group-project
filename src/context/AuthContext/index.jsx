import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [users, setUsers] = React.useState([]);
	const [donation, setDonation] = React.useState([]);
	const navigate = useNavigate();
	const [globalLoading, setGlobalLoading] = useState(false);


	React.useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		try {
			setGlobalLoading(true)
			const res = await api.get("users", {
				headers: {
					"Content-Type": "application/json",
				},
			});
			const json = await res.data;

			setUsers(json);
		} catch (error) {

			console.error(error);
		} finally {
			setGlobalLoading(false)
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
			console.error(error);
		}
	};

	const userLogout = () => {
		localStorage.clear();
		navigate("/login");
	}

	return (
		<AuthContext.Provider value={{ users, donation, getUsers, getDonations, userLogout }}>
			{children}
		</AuthContext.Provider>
	);
};
