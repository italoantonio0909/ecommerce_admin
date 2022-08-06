import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getUrl } from 'src/app/helpers';
import { SubscriberPaginated, Subscriber } from '../entities/Subscriber';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private http: HttpClient) { }

  subscriberFetchData(limit: number, startAfter: number): Observable<SubscriberPaginated> {
    return this.http.get<SubscriberPaginated>(
      `${getUrl()}/api/backoffice/subscribers/paginate/${limit}/${startAfter}`).pipe(map(e => e)
      );
  }

  subscriberFetchTotal(): Observable<{ subscribersTotal: number }> {
    return this.http.get<{ subscribersTotal: number }>(
      `${getUrl()}/api/backoffice/subscribers/total`).pipe(map(e => e)
      );
  }

  subscriberCreate(subscriber: Subscriber): Observable<Subscriber> {
    return this.http.post<Subscriber>(`${getUrl()}/api/backoffice/subscribers`, subscriber).pipe(a => a)
  }
}
