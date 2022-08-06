import { Post } from '../entities/Post';

export class PostPaginateList {
    static type = "PostPaginateList"
    constructor(public limit: number, public page: number) { }
}

export class PostCreate {
    static type = "PostPaginateList"
    constructor(public post: Post) { }
}