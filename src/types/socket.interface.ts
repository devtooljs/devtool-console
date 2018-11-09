export interface Client {
    url: string;
    isConnected: boolean;
    logs: Log[];
}

export interface Log {
    timestamp: string;
    content: string;
    line: string;
}
