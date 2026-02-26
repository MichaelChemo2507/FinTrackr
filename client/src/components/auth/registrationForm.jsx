import { useState, useRef, useEffect } from "react";
import onSubmitMethods from "../../handlers/onSubmit.jsx";
import { Link } from "react-router-dom";
import Text from "../ui/text.jsx";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {

    const [error, setError] = useState();
    const [formData, setFormData] = useState({ 'userName': { type: 'text', value: '' }, 'email': { type: 'email', value: '' }, 'password': { type: 'password', value: '' }, 'phone': { type: 'tel', value: '' } });
    const navigate = useNavigate();

    const abortControllerRef = useRef(null);

    useEffect(() => {
        if (error) {
            alert(error.message);
        }
    }, [error]);

    return (
        <div>
            <form onSubmit={async (e) => {

                e.preventDefault();

                try {
                    const formDataToSend = Object.fromEntries(Object.keys(formData).map(key => [key, formData[key].value]));

                    const result = await onSubmitMethods.registration(abortControllerRef, formDataToSend);

                    if (result.success == false) {
                        throw new Error(result.message);
                    }

                    navigate('/login');

                } catch (e) {
                    setError(e);
                }
            }}>
                <h1>Create Account</h1>
                <Text>Start tracking your finances today</Text>

                {Object.keys(formData).map(key => <input type={formData[key].type} value={formData[key].value} placeholder={`${key}...`} onChange={e => {
                    setFormData({ ...formData, [key]: { ...formData[key], value: e.target.value } });
                }} />
                )}

                <button type="submit">Get Started</button>
            </form>
            <div>Already have an account?<Link to={'/login'}>Sign in</Link></div> {/* Link to login page - not exist yet */}
        </div>
    );
}