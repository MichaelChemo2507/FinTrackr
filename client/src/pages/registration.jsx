import RegistrationForm from "../components/auth/registrationForm";
import WelcomeText from "../components/welcomeText";
import registrationWelcomeText from "../content/registrationPage";
import Logo from "../components/ui/logo";

export default function RegistrationPage() {
    return (
        <div>
            <Logo />
            <WelcomeText title={registrationWelcomeText.title} body={registrationWelcomeText.body} features={registrationWelcomeText.features} />
            <RegistrationForm />
        </div>
    );
}