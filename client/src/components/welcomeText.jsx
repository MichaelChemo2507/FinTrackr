import Text from "./ui/text";
import Icon from "./ui/icon";
export default function WelcomeText({ title, body = "", features = [] }) {

    return (
        <div>
            <Text style={{}}>{title}</Text>
            {body != "" && <Text style={{}}>{body}</Text>}
            {features.length > 0 && 
                <div>
                    {features.map(feature =>
                        <div key={feature.id}>
                            <Icon url={feature.icon} style={{}} />
                            <Text style={{}}>{feature.title}</Text>
                            <Text style={{}}>{feature.text}</Text>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}