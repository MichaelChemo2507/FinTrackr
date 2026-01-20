import RegistrationPage from "../components/registration/mainPage";

export default function Routers() {
    return (
        <Routes>
            <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
    );
}