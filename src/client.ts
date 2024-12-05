import { createProximaClient } from "proxima"

const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;

export const client = createProximaClient({
	clientId: clientId,
});