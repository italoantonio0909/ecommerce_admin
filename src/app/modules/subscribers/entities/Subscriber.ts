export interface Subscriber {
    id?: string;
    email: string;
    created_at?: number;
    modified_at?: number;
    status?: "active" | "inactive";
}


export interface SubscriberPaginated {
    limit: number,
    count: number,
    next: number,
    previous: number,
    results: Array<Subscriber>
}