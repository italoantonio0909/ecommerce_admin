import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscriber } from '../../subscribers/entities/Subscriber';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent<T> implements OnInit {

  @Input() tableColumns: Array<{ header: string }> = [];
  @Input() dataColumns$: Observable<Array<Subscriber>>;

  constructor() { }

  ngOnInit(): void {
    this.dataColumns$.subscribe(console.log)
  }

}
