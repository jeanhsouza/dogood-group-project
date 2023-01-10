import React from "react";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { DashContext } from "../DashContext";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [users, setUsers] = React.useState([]);
	const [donation, setDonation] = React.useState([]);
	const navigate = useNavigate();
	const { getCurrentUser } = React.useContext(DashContext);
	const [globalLoading, setGlobalLoading] = useState(false);
	const [login, setLogin] = useState(null);

	React.useEffect(() => {
		getUsers();
	}, []);

	React.useEffect(() => {
		const token = window.localStorage.getItem("@USER:TOKEN");
		if (token) {
			setLogin(true)
			navigate("/dashboard")
		};
	}, []);

	const getUsers = async () => {
		try {
			setGlobalLoading(true);
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
			setGlobalLoading(false);
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

	const reqLogin = async (data) => {
		try {
			const response = await toast.promise(api.post("/login", data), {
				pending: "Estamos verificando seu usuário...",
				success: "Usuário logado com sucesso!",
				error: "Algo deu errado! Verifique se os campos estão corretos!",
			});

			window.localStorage.setItem("@USER:ID", response.data.user.id);
			window.localStorage.setItem("@USER:TOKEN", response.data.accessToken);
			getCurrentUser();
			setLogin(true);
			setTimeout(() => {
				navigate("/dashboard");
			}, 2000);
		} catch (error) {
			setLogin(false);
			console.log(error);
		}
	};

	const reqRegister = async (data) => {
		try {
			const response = await toast.promise(api.post("/register", data), {
				pending: "Estamos verificando seu usuário...",
				success: "Usuário criado com sucesso!",
				error: "Algo deu errado! Verifique se os campos estão corretos!",
			});
			getUsers();

			setTimeout(() => {
				navigate("/login");
			}, 2000);
		} catch (error) {
			console.error(error);
		}
	};

	const userLogout = () => {
		localStorage.clear();
		setLogin(false);
		navigate("/login");
	};

	return (
		<AuthContext.Provider
			value={{
				users,
				donation,
				getUsers,
				getDonations,
				userLogout,
				login,
				reqRegister,
				reqLogin,
				navigate,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
