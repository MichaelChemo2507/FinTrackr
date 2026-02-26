import RegistrationPage from "../pages/registration";
import LoginPage from "../pages/login";
import { Routes, Route, Navigate } from "react-router-dom";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/registration" replace />} /> {/* In the future will redirect to main page. */}
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} /> {/* LoginPage component not exist yet */}
        </Routes>
    );
}