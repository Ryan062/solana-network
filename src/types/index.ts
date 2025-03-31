export interface Wallet {
    id: string;
    name: string;
    icon: string;
    popular: boolean;
}

export type ConnectionStatus = "connecting" | "connected" | "error" | "manual-entry" | "";
