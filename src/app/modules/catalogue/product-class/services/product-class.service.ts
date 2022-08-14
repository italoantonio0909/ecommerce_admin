import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paginate } from '../../../shared/entities/Pagination';
import { CatalogueProductClass } from '../entities/ProductClass';
import { Observable } from 'rxjs';
import { getUrl } from 'src/app/helpers';

@Injectable({
  providedIn: 'root'
})
export class ProductClassService {


  constructor(private http: HttpClient) { }

  productClassListPaginate(limitOfDocuments: number, page: number): Observable<Paginate<CatalogueProductClass>> {
    return this.http.get<Paginate<CatalogueProductClass>>(`${getUrl()}/api/backoffice/product-class/paginate/${limitOfDocuments}/${page}`)
      .pipe(a => a)
  }

  productClassCreate(productClass: CatalogueProductClass): Observable<CatalogueProductClass> {
    return this.http.post<CatalogueProductClass>(`${getUrl()}/api/backoffice/product-class`, productClass)
      .pipe(a => a)
  }
}
