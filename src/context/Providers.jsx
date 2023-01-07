import { AuthProvider } from "./AuthContext";
import { DashProvider } from "./DashContext";

export function Providers({ children }) {
	return (
		<DashProvider>
			<AuthProvider>{children}</AuthProvider>
		</DashProvider>
	);
}
