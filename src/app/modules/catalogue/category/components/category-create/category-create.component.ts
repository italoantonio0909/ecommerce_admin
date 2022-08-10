import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CatalogueCategoryCreate } from '../../store/actions';
import { CatalogueCategory } from '../../entities/Category';
import { catchError, of } from 'rxjs';
import { AlertMessage } from '../../../../../helpers/index';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
})
export class CategoryCreateComponent {

  constructor(private formBuilder: FormBuilder, private store: Store) { }

  isLoading: boolean = false;

  validate: boolean = false;

  categoryCreateForm = this.formBuilder.group({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    isPublic: new FormControl(true, Validators.required),
    image: new FormControl(null)
  })

  submit() {
    this.isLoading = true;

    this.validate = true;
    if (this.categoryCreateForm.invalid) {
      this.isLoading = false;
      return;
    }

    const data: CatalogueCategory = {
      name: this.categoryCreateForm.get("name").value,
      description: this.categoryCreateForm.get("description").value,
      is_public: this.categoryCreateForm.get("isPublic").value,
      // image: this.categoryCreateForm.get("image").value,
    }
    this.store.dispatch(new CatalogueCategoryCreate(data)).pipe(
      catchError((e) => {
        this.isLoading = false;
        return of('')
      })
    ).subscribe(() => this.isLoading = false)
  }

  onChange(event: any) {
    const value = event.target.value === "true" ? true : false
    this.categoryCreateForm.get("isPublic").setValue(value);
  }

  get isPublic() {
    return this.categoryCreateForm.get("isPublic").value
  }

  onFileChange(event: any) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.categoryCreateForm.patchValue({
          image: reader.result
        });
      };
    }
  }

}
