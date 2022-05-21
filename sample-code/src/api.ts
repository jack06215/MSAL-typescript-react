import { logMessage } from "./utils/ui";

export function callApi(endpoint: string, token: string) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers,
    };

    logMessage("Calling web API...");

    fetch(endpoint, options)
        .then((response) => response.json())
        .then((response) => {
            if (response) {
                logMessage(
                    `My name is: ${response.name} I am from ${response.country}\n working as ${response.jobTitle}`
                );
            }

            return response;
        })
        .catch((error) => {
            console.error(error);
        });
}
