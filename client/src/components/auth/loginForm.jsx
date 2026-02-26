import { useState, useRef, useEffect } from "react";
import onSubmitMethods from "../../handlers/onSubmit.jsx";
import Text from "../ui/text.jsx";
import { Link } from "react-router-dom";


export default function LoginForm() {

    const [error, setError] = useState();
    const [formData, setFormData] = useState({ 'userName': { type: 'text', value: '' }, 'password': { type: 'password', value: '' } });

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

                    const result = await onSubmitMethods.login(abortControllerRef, formDataToSend);

                    if (result.success == false) {
                        throw new Error(result.message);
                    }

                    alert("Login successful!");
                    //redirect to dashboard after successful registration
                } catch (e) {
                    setError(e);
                }
            }}>
                <h1>Welcome Back</h1>
                <Text>Sign in to your Fintrakr account</Text>
                {Object.keys(formData).map(key => <input type={formData[key].type} value={formData[key].value} placeholder={`${key}...`} onChange={e => {
                    setFormData({ ...formData, [key]: { ...formData[key], value: e.target.value } });
                }} />
                )}

                <Link href="">Forgot password?</Link>{/* Link to forgot password page - not exist yet */}

                <button type="submit">Sign In</button>
            </form>
            <div>Don't have an account?<Link to={'/registration'}>Create one</Link></div> {/* Link to registration page - not exist yet */}
        </div>
    );
}