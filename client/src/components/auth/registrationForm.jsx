import { useState,useRef } from "react";
import onSubmitMethods from "../../handlers/onSubmit.jsx";

export default function RegistrationForm() {

    const [error, setError] = useState();
    const [formData, setFormData] = useState({ 'userName': '', 'email': '', 'password': '', 'phone': '' });
    const [isLoading, setIsLoading] = useState(false);
    
    const abortControllerRef = useRef(null);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <form onSubmit={(e) => {

                e.preventDefault();
                
                setIsLoading(true);
                
                try {
                    onSubmitMethods.registration(abortControllerRef,formData);
                } catch (e) {

                    if (e.name === 'AbortError') { 
                        
                        console.log('Request was aborted');

                        return;
                    }

                    setError(e);
                } finally {
                    setIsLoading(false);
                    //redirect to login page or dashboard after successful registration
                }
            }}>
                <h1>Create Account</h1>
                <div>Start tracking your finances today</div>

                {Object.keys(formData).map(key => <input type={key} value={formData[key]} placeholder={`${key}...`} onChange={e => {
                    setFormData({ ...formData, [key]: e.target.value });
                }} />
                )}

                <button type="submit">Get Started</button>
            </form>
            <div>Already have an account?<a href="">Sign in</a></div> {/* Link to login page - not exist yet */}
        </div>
    );
}