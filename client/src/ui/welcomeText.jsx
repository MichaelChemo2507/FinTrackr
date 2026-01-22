import Text from "./text";
import Icon from "./icon";
export default function WelcomeText({ title, body = "", features = [] }) {

    return (
        <div>
            <Text style={{}}>{title}</Text>
            <Text style={{}}>{body}</Text>
            <div>
                {features.length > 0 && features.map(feature =>
                    <div key={feature.id}>
                        <Icon url={feature.icon} style={{}} />
                        <Text style={{}}>{feature.title}</Text>
                        <Text style={{}}>{feature.text}</Text>
                    </div>
                )}
            </div>
        </div>
    );
}