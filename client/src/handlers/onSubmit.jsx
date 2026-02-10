import Urls from "../content/urls.js";

const onSubmitMethods = {
    registration: async (abortControllerRef, formData) => {
        
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController();

        const response = await fetch(Urls.registration, {

            method: "POST",
            signal: abortControllerRef.current.signal,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),

        }
        );
        
        const result = await response.json();
        
        console.log(result);

    }
}

export default onSubmitMethods;