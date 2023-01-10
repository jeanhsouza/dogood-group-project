import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const token = window.localStorage.getItem("@USER:ID");

	return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
