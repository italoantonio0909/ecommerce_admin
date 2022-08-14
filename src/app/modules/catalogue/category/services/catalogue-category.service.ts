import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatalogueCategory } from '../entities/Category';
import { getUrl } from 'src/app/helpers';
import { Paginate } from '../../../shared/entities/Pagination';

@Injectable({
  providedIn: 'root'
})
export class CatalogueCategoryService {

  constructor(private http: HttpClient) { }

  catalogueCategoryListPaginate(limitOfDocuments: number, page: number): Observable<Paginate<CatalogueCategory>> {
    return this.http.get<Paginate<CatalogueCategory>>(`${getUrl()}/api/backoffice/category/paginate/${limitOfDocuments}/${page}`)
      .pipe(a => a)
  }

  catalogueCategoryCreate(category: CatalogueCategory): Observable<CatalogueCategory> {
    return this.http.post<CatalogueCategory>(`${getUrl()}/api/backoffice/category`, category)
      .pipe(a => a)
  }
}
