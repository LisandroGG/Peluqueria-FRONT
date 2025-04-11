import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import AdminPanel from "./components/Admin/AdminPanel.jsx";
//Import components
import Layout from "./components/Layout/Layout.jsx";
import Login from "./components/Login/Login.jsx";
import ChangePassword from "./components/Password/ChangePassword.jsx";
import ForgotPassword from "./components/Password/ForgotPassword.jsx";
import Register from "./components/Register/Register.jsx";

function App() {
	return (
		<div className="min-h-screen">
			<Toaster position="top-center" />
			<Routes>
				<Route path="/" element={Layout} />
				<Route path="/login" element={Login} />
				<Route path="/register" element={Register} />
				<Route path="/forgotPassword" element={ForgotPassword} />
				<Route path="changePassword" element={ChangePassword} />
				<Route path="/admin" element={AdminPanel} />
			</Routes>
		</div>
	);
}

export default App;
