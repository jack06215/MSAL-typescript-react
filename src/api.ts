import { logMessage } from "./utils/ui";

import { msalInstance } from "./index";
import { apiConfig, loginRequest } from './authConfig';


export async function callApi(endpoint: string) {
    const account = msalInstance.getActiveAccount();
    if (!account) {
        throw Error("No active account! Verify a user has been signed in and setActiveAccount has been called.");
    }
    const response = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account: account
    });


    const headers = new Headers();
    const bearer = `Bearer ${response.accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers,
    };

    logMessage("Calling web API...");

    return fetch(endpoint, options)
        .then((response) => response.json())
        // .then((response) => {
        //     if (response) {
        //         logMessage(
        //             `My name is: ${response.name} I am from ${response.country}\n working as ${response.jobTitle}`
        //         );
        //     }
        // })
        .catch((error) => {
            console.error(error);
        });
}
