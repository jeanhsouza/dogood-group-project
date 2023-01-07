import React from "react";
import { createContext } from "react";
import { api } from "../../services/api";

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {

	const [users, setUsers] = React.useState([]);

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
			const json = await res.data

			setUsers(json);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AuthContext.Provider value={{ users }}>{children}</AuthContext.Provider>
	);
};
