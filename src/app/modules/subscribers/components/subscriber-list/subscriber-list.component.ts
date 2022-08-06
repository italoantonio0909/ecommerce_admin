import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { SubscriberState } from '../../store/state';
import { Observable } from 'rxjs';
import { Subscriber } from '../../entities/Subscriber';
import { SubscriberPaginateList } from '../../store/actions';

@Component({
  selector: 'app-subscriber-list',
  templateUrl: './subscriber-list.component.html',
})
export class SubscriberListComponent implements OnInit {

  limitOfDocuments: number = 5;

  page: number = 1;

  constructor(private store: Store) { }

  @Select(SubscriberState.subscriberPaginateList) subscribers$: Observable<Array<Subscriber>>;

  @Select(SubscriberState.subscriberPaginateListCount) subscriberCounter$: Observable<number>;

  ngOnInit(): void {
    this.subscriberFetchData(this.limitOfDocuments, this.page);
  }

  subscriberFetchData = (limitOfDocuments: number, page: number,) => {
    this.page = page;
    this.limitOfDocuments = limitOfDocuments;
    this.store.dispatch(new SubscriberPaginateList(limitOfDocuments, page));
  }

  createCounter(counter: number) {
    const total = Math.ceil(counter / this.limitOfDocuments);
    return new Array(total);
  }

  changeValuePage(event: any) {
    const limitOfDocuments = parseInt(event.target.value);
    this.subscriberFetchData(limitOfDocuments, this.page);
  }

  navigateNext(counter: number) {
    const total = Math.ceil(counter / this.limitOfDocuments);
    if (this.page === total) {
      return false;
    }
    return this.subscriberFetchData(this.limitOfDocuments, this.page + 1);
  }

  navigatePrevious(counter: number) {
    const total = Math.ceil(counter / this.limitOfDocuments);
    if (this.page === 1) {
      return false;
    }
    return this.subscriberFetchData(this.limitOfDocuments, this.page - 1);
  }

}
