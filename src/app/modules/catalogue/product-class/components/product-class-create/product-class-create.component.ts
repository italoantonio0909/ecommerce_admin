import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CatalogueProductClass } from '../../entities/ProductClass';
import { CatalogueProductClassCreate } from '../../store/actions';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-product-class-create',
  templateUrl: './product-class-create.component.html',
})
export class ProductClassCreateComponent {

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  isLoading: boolean = false;

  validate: boolean = false;

  productClassCreateForm = this.formBuilder.group({
    name: new FormControl("", Validators.required),
    required_shipping: new FormControl(true, Validators.required),
    track_stock: new FormControl(true, Validators.required),
  })

  submit() {
    this.validate = true;

    if (this.productClassCreateForm.invalid) {
      this.isLoading = false;
      return;
    }

    this.isLoading = true;

    const data: CatalogueProductClass = {
      name: this.productClassCreateForm.get("name").value,
      required_shipping: this.productClassCreateForm.get("required_shipping").value,
      track_stock: this.productClassCreateForm.get("track_stock").value,
    }
    this.store.dispatch(new CatalogueProductClassCreate(data)).pipe(
      catchError((e) => {
        this.isLoading = false;
        return of('')
      })
    ).subscribe(() => {
      this.isLoading = false;
      this.validate = false;
      this.productClassCreateForm.reset({ required_shipping: true, track_stock: true });
    })
  }

  onChangeRequiredShipping(event: any) {
    const value = event.target.value === "true" ? true : false;
    this.productClassCreateForm.get("required_shipping").setValue(value);
  }

  onChangeTrackStock(event: any) {
    const value = event.target.value === "true" ? true : false;
    this.productClassCreateForm.get("track_stock").setValue(value);
  }

  get requiredShipping() {
    return this.productClassCreateForm.get("required_shipping").value
  }

  get trackStock() {
    return this.productClassCreateForm.get("track_stock").value
  }

  get name() {
    return this.productClassCreateForm.get("name").value
  }
}
