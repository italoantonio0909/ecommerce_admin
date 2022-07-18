
export class SubscriberFetchData {
    static readonly type = "Subscriber fetch data"
    constructor(public limitOfDocuments: number, public page: number) { }
}

export class SubscriberFetchTotal {
    static readonly type = "Subscriber total data"
    constructor() { }
}