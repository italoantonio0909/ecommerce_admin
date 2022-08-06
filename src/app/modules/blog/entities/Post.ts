export interface Post {
    readonly id?: string;
    readonly title: string
    readonly meta_description: string;
    readonly description: string
    readonly image: string
    readonly number_comments: number
    readonly comments: Array<PostComment>;
    readonly status: boolean;
    readonly published: boolean;
    readonly publish_at?: number;
    readonly created_at?: number;
    readonly modified_at?: number;
}

export interface PostComment {
    readonly created_by: string;
    readonly content: string;
    readonly status: string;
    readonly created_at?: number;
    readonly modified_at?: number;
}

export interface PostPaginate {
    results: Array<Post>;
    count: number;
}