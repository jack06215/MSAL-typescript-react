import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';

// import { loginRequest, graphConfig } from "../authConfig";

// const port = "3000";
const tenantId = "69001b58-ec5e-43b3-9b2b-7ba9e448852b";

const clientId = "66b9b8ef-a288-47f5-a7b7-6fb4703be30f";
const clientSecret = "c01e4b5a-cebc-4428-a756-a652fe343609";
const scopes = "https://graph.microsoft.com/User.ReadWrite.All";
// const redirectUri = `http://localhost:${port}/authresponse`;
// const authorityHost = "jackazureadb2c.b2clogin.com";

export async function runExample() {
    const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
        scopes: [scopes],
    });
    const client = Client.initWithMiddleware({
        debugLogging: true,
        authProvider,
    });
    const res = await client.api("/users/").get();
    console.log(res);
}