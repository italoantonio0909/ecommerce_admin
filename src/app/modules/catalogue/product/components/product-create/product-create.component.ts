import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CatalogueProduct } from '../../entities/CatalogueProduct';
import { CatalogueProductCreate } from '../../store/actions';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
})
export class ProductCreateComponent {

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  isLoading: boolean = false;

  validate: boolean = false;

  productCreateForm = this.formBuilder.group({
    structure: new FormControl("", Validators.required),
    title: new FormControl("", Validators.required),
    meta_title: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    meta_description: new FormControl("", Validators.required),
    is_public: new FormControl(true, Validators.required),
    is_discountable: new FormControl(true, Validators.required),
  })

  // readonly structure: BackofficeProductStructure;
  // readonly is_public: boolean;
  // readonly parent: BackofficeProduct;
  // readonly title: BackofficeProductTitle;
  // readonly description: BackofficeProductDescription;
  // readonly meta_title: BackofficeProductMetaTitle;
  // readonly meta_description: BackofficeProductMetaDescription;
  // readonly product_class: BackofficeProductClass;
  // readonly categories: Array<BackofficeCategory>;
  // readonly is_discountable: boolean;
  // readonly recommended_products: Array<BackofficeProduct>;
  // readonly rating: number;
  // readonly created_at: number;
  // readonly modified_at: number;

  submit() {
    // this.validate = true;

    // if (this.productCreateForm.invalid) {
    //   this.isLoading = false;
    //   return;
    // }

    // this.isLoading = true;

    // const data: CatalogueProduct = {

    // }

    // this.store.dispatch(new CatalogueProductCreate(data)).pipe(
    //   catchError((e) => {
    //     this.isLoading = false;
    //     return of('')
    //   })
    // ).subscribe(() => {
    //   this.isLoading = false;
    //   this.validate = false;
    //   this.productCreateForm.reset();
    // })
  }

  onChangeIsPublic(event: any) {
    const value = event.target.value === "true" ? true : false;
    this.productCreateForm.get("is_public").setValue(value);
  }

  onChangeIsDiscountable(event: any) {
    const value = event.target.value === "true" ? true : false;
    this.productCreateForm.get("is_discountable").setValue(value);
  }

  // onChangeTrackStock(event: any) {
  //   const value = event.target.value === "true" ? true : false;
  //   this.productCreateForm.get("track_stock").setValue(value);
  // }

  // get requiredShipping() {
  //   return this.productCreateForm.get("required_shipping").value
  // }

  // get trackStock() {
  //   return this.productCreateForm.get("track_stock").value
  // }
}
