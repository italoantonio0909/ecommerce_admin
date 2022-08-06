import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { PostState } from '../../store/state';
import { Observable } from 'rxjs';
import { Post } from '../../entities/Post';
import { PostPaginateList } from '../../store/actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {

  limitOfDocuments: number = 5;

  page: number = 1;

  constructor(private store: Store) { }

  @Select(PostState.postPaginateList) posts$: Observable<Array<Post>>;

  @Select(PostState.postPaginateListCount) postsCounter$: Observable<number>;

  ngOnInit(): void {
    this.postPaginateList(this.limitOfDocuments, this.page);
  }

  postPaginateList = (limitOfDocuments: number, page: number,) => {
    this.page = page;
    this.limitOfDocuments = limitOfDocuments;
    this.store.dispatch(new PostPaginateList(limitOfDocuments, page));
  }

  createCounter(counter: number) {
    const total = Math.ceil(counter / this.limitOfDocuments);
    return new Array(total);
  }

  changeValuePage(event: any) {
    const limitOfDocuments = parseInt(event.target.value);
    this.postPaginateList(limitOfDocuments, this.page);
  }

  navigateNext(counter: number) {
    const total = Math.ceil(counter / this.limitOfDocuments);
    if (this.page === total) {
      return false;
    }
    return this.postPaginateList(this.limitOfDocuments, this.page + 1);
  }

  navigatePrevious(counter: number) {
    const total = Math.ceil(counter / this.limitOfDocuments);
    if (this.page === 1) {
      return false;
    }
    return this.postPaginateList(this.limitOfDocuments, this.page - 1);
  }

}
