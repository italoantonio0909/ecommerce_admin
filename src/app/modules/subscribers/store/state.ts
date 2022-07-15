import { State, Action, StateContext, createSelector, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { SubscriberService } from '../services/subscriber.service';
import { tap } from 'rxjs/operators';
import { SubscriberFetchData } from './actions';
import { Subscriber } from '../entities/Subscriber';

export interface SubscriberModelState {
    subscribers: Array<Subscriber>;
}

@State<SubscriberModelState>({
    name: 'subscribers',
    defaults: {
        subscribers: []
    }
})
@Injectable()
export class SubscriberState {

    constructor(private subscriberService: SubscriberService) { }

    @Selector()
    static subscriberGetData(state: SubscriberModelState) {
        return state.subscribers
    }

    @Action(SubscriberFetchData)
    subscriberFetchData(
        ctx: StateContext<SubscriberModelState>,
    ) {
        const state = ctx.getState();

        return this.subscriberService.subscriberFetchData(5, 0).pipe(
            tap(({ results }) => ctx.setState({ ...state, subscribers: results }))
        )
    }

}