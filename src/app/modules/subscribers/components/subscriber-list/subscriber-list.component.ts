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

  constructor(private store: Store) { }

  @Select(SubscriberState.subscriberGetData) subscribers$: Observable<Array<Subscriber>>

  ngOnInit(): void {
    this.store.dispatch(new SubscriberFetchData());

    this.subscribers$.subscribe(console.log)
  }

}
