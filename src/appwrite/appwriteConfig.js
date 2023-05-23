import { Client, Account, Databases } from "appwrite";

const client = new Client();
client
  .setEndpoint(process.env.REACT_APP_API_ENDPOINT)
  .setProject(process.env.REACT_APP_PROJECT_ID);

export const account = new Account(client);

export const databases = new Databases(client);
