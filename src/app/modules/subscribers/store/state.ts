import { State, Action, StateContext, createSelector, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { SubscriberService } from '../services/subscriber.service';
import { tap } from 'rxjs/operators';
import { SubscriberFetchData, SubscriberFetchTotal } from './actions';
import { Subscriber } from '../entities/Subscriber';

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
    static subscriberGetData(state: SubscriberModelState) {
        return state.subscribers
    }

    @Selector()
    static subscriberGetCounter(state: SubscriberModelState) {
        return state.subscribersCount
    }

    @Selector()
    static subscriberGetTotal(state: SubscriberModelState) {
        return state.subscribersTotal
    }

    @Action(SubscriberFetchData)
    subscriberFetchData(
        ctx: StateContext<SubscriberModelState>,
        { limitOfDocuments, page }: SubscriberFetchData
    ) {
        const state = ctx.getState();

        return this.subscriberService.subscriberFetchData(limitOfDocuments, page).pipe(
            tap(({ results, count }) =>
                ctx.setState({ ...state, subscribers: results, subscribersCount: count }))
        )
    }

    @Action(SubscriberFetchTotal)
    subscriberTotal(
        ctx: StateContext<SubscriberModelState>,
    ) {
        const state = ctx.getState();

        return this.subscriberService.subscriberFetchTotal().pipe(
            tap(({ subscribersTotal }) =>
                ctx.setState({ ...state, subscribersTotal }))
        )
    }

}