import { useState } from "react";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({ 'username': '', 'email': '', 'password': '', 'phone': '' });


    return (
        <div>
            <form onSubmit={() => {
            }}>
                <h1>Create Account</h1>
                <div>Start tracking your finances today</div>

                {Object.keys(formData).map(key => <input type={key} value={formData[key]} placeholder={`${key}...`} onChange={e => {
                    setFormData({ ...formData, [key]: e.target.value });
                }} />
                )}

                <button type="submit">Get Started</button>
            </form>
            <div>Already have an account?<a href="">Sign in</a></div>
        </div>
    );
}