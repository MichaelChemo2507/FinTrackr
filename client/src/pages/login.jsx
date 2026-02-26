import LoginForm from "../components/auth/loginForm";
import WelcomeText from "../components/welcomeText";
import loginWelcomeText from "../content/loginPage";
import Logo from "../components/ui/logo";

export default function LoginPage() {
    return (
        <div>
            <Logo />
            <WelcomeText title={loginWelcomeText.title} body={loginWelcomeText.body} features={loginWelcomeText.features} />
            <LoginForm />
        </div>
    );
}