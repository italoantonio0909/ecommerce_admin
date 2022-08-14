import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paginate } from '../../../shared/entities/Pagination';
import { getUrl } from 'src/app/helpers';
import { Observable } from 'rxjs';
import { CatalogueProduct } from '../entities/CatalogueProduct';

@Injectable({
  providedIn: 'root'
})
export class CatalogueProductService {

  constructor(private http: HttpClient) { }

  productListPaginate(limitOfDocuments: number, page: number): Observable<Paginate<CatalogueProduct>> {
    return this.http.get<Paginate<CatalogueProduct>>(`${getUrl()}/api/backoffice/product/paginate/${limitOfDocuments}/${page}`)
      .pipe(a => a)
  }

  productCreate(productClass: CatalogueProduct): Observable<CatalogueProduct> {
    return this.http.post<CatalogueProduct>(`${getUrl()}/api/backoffice/product`, productClass)
      .pipe(a => a)
  }
}