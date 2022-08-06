import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getUrl } from 'src/app/helpers';
import { Post, PostPaginate } from '../entities/Post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http: HttpClient) { }

  postPaginateList(limit: number, page: number): Observable<PostPaginate> {
    return this.http.get<PostPaginate>(
      `${getUrl()}/api/backoffice/blog/post/paginate/${limit}/${page}`).pipe(map(e => e)
      );
  }

  postCreate(post: Post): Observable<Post> {
    return this.http.post<Post>(`${getUrl()}/api/backoffice/blog/post`, post).pipe(a => a)
  }
}
