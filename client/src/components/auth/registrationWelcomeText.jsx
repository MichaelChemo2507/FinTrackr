import { registrationWelcomeText } from '../../content/registrationPage';


export default function RegistrationWelcomeText() {
    const { title, body, features } = registrationWelcomeText;

    return (
        <div>
            <Title>{title}</Title> // UI Component
            <Text>{body}</Text>// UI Component
            <div>
                {features.map(feature =>
                    <div>
                        <Icon>{feature.icon}</Icon>
                        <Title>{feature.title}</Title>
                        <Text>{feature.text}</Text>
                    </div>
                )}
            </div>
        </div>
    );
}