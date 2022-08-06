import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatalogueCategoryPaginate, CatalogueCategory } from '../entities/Category';
import { getUrl } from 'src/app/helpers';

@Injectable({
  providedIn: 'root'
})
export class CatalogueCategoryService {

  constructor(private http: HttpClient) { }

  catalogueCategoryListPaginate(limitOfDocuments: number, page: number): Observable<CatalogueCategoryPaginate> {
    return this.http.get<CatalogueCategoryPaginate>(`${getUrl()}/api/backoffice/category/paginate/${limitOfDocuments}/${page}`)
      .pipe(a => a)
  }

  catalogueCategoryCreate(category: CatalogueCategory): Observable<CatalogueCategory> {
    return this.http.post<CatalogueCategory>(`${getUrl()}/api/backoffice/category`, category)
      .pipe(a => a)
  }
}
