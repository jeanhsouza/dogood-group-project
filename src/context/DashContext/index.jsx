import { createContext } from "react";

export const DashContext = createContext({});

export const DashProvider = ({ children }) => {
	return <DashContext.Provider value={{}}>{children}</DashContext.Provider>;
};
