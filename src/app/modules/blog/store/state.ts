import { State, Action, StateContext, createSelector, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Post } from '../entities/Post';
import { PostService } from '../services/post.service';
import { PostPaginateList, PostCreate } from './actions';
import { tap } from 'rxjs/operators';

export interface PostModelState {
    postCount: number;
    posts: Array<Post>;
}

@State<PostModelState>({
    name: 'posts',
    defaults: {
        postCount: 0,
        posts: []
    }
})
@Injectable()
export class PostState {

    constructor(private service: PostService) { }

    @Selector()
    static postPaginateList(state: PostModelState) {
        return state.posts
    }

    @Selector()
    static postPaginateListCount(state: PostModelState) {
        return state.postCount
    }

    @Action(PostPaginateList)
    postPaginateList(
        ctx: StateContext<PostModelState>,
        { limit, page }: PostPaginateList
    ) {
        const state = ctx.getState();

        return this.service.postPaginateList(limit, page).pipe(
            tap(({ results, count }) =>
                ctx.setState({ ...state, posts: results, postCount: count }))
        )
    }


    @Action(PostCreate)
    subscriberCreate(
        _: StateContext<PostModelState>,
        { post }: PostCreate
    ) {
        return this.service.postCreate(post);
    }
}