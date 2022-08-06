import { Subscriber } from '../entities/Subscriber';

export class SubscriberPaginateList {
    static readonly type = "Subscriber paginate list"
    constructor(public limitOfDocuments: number, public page: number) { }
}

export class SubscriberPaginateListCount {
    static readonly type = "Subscriber count"
    constructor() { }
}

export class SubscriberCreate {
    static readonly type = "Subscriber create"
    constructor(public subscriber: Subscriber) { }
}