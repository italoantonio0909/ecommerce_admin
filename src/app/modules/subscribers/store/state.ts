import { State, Action, StateContext, createSelector, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { SubscriberService } from '../services/subscriber.service';
import { tap } from 'rxjs/operators';
import { Subscriber } from '../entities/Subscriber';
import { SubscriberPaginateListCount, SubscriberPaginateList, SubscriberCreate } from './actions';

export interface SubscriberModelState {
    subscribersCount: number;
    subscribers: Array<Subscriber>;
    subscribersTotal: number;
}

@State<SubscriberModelState>({
    name: 'subscribers',
    defaults: {
        subscribersCount: 0,
        subscribers: [],
        subscribersTotal: 0
    }
})
@Injectable()
export class SubscriberState {

    constructor(private subscriberService: SubscriberService) { }

    @Selector()
    static subscriberPaginateList(state: SubscriberModelState) {
        return state.subscribers
    }

    @Selector()
    static subscriberPaginateListCount(state: SubscriberModelState) {
        return state.subscribersCount
    }

    @Selector()
    static subscriberGetTotal(state: SubscriberModelState) {
        return state.subscribersTotal
    }

    @Action(SubscriberPaginateList)
    subscriberFetchData(
        ctx: StateContext<SubscriberModelState>,
        { limitOfDocuments, page }: SubscriberPaginateList
    ) {
        const state = ctx.getState();

        return this.subscriberService.subscriberFetchData(limitOfDocuments, page).pipe(
            tap(({ results, count }) =>
                ctx.setState({ ...state, subscribers: results, subscribersCount: count }))
        )
    }


    @Action(SubscriberCreate)
    subscriberCreate(
        _: StateContext<SubscriberModelState>,
        { subscriber }: SubscriberCreate
    ) {
        return this.subscriberService.subscriberCreate(subscriber);
    }

    @Action(SubscriberPaginateListCount)
    subscriberTotal(
        ctx: StateContext<SubscriberModelState>,
    ) {
        const state = ctx.getState();

        const { subscribersTotal } = state;

        if (subscribersTotal) {
            return state
        }

        return this.subscriberService.subscriberFetchTotal().pipe(
            tap(({ subscribersTotal }) =>
                ctx.setState({ ...state, subscribersTotal }))
        )
    }

}