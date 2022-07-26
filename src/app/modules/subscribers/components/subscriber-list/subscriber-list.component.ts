import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { SubscriberFetchData } from '../../store/actions';
import { SubscriberState } from '../../store/state';
import { Observable } from 'rxjs';
import { Subscriber } from '../../entities/Subscriber';

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
})
export class SubscriberListComponent implements OnInit {

  limitOfDocuments: number = 5;

  page: number = 1;

  constructor(private store: Store) { }

  @Select(SubscriberState.subscriberGetData) subscribers$: Observable<Array<Subscriber>>;

  @Select(SubscriberState.subscriberGetCounter) subscriberCounter$: Observable<number>;

  ngOnInit(): void {
    this.subscriberFetchData(this.limitOfDocuments, this.page);
  }

  subscriberFetchData = (limitOfDocuments: number, page: number,) => {
    this.page = page;
    this.limitOfDocuments = limitOfDocuments;
    this.store.dispatch(new SubscriberFetchData(limitOfDocuments, page));
  }

  createCounter(counter: number) {
    const total = Math.ceil(counter / this.limitOfDocuments)
    return new Array(total)
  }

  changeValuePage(event: any) {
    const page = parseInt(event.target.value);
    this.subscriberFetchData(this.limitOfDocuments, page)
  }

}
