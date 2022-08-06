import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscriber } from '../../entities/Subscriber';
import { Store } from '@ngxs/store';
import { SubscriberCreate } from '../../store/actions';
import { catchError, of } from 'rxjs';
import { AlertMessage } from '../../../../helpers/index';

@Component({
  selector: 'app-subscriber-create',
  templateUrl: './subscriber-create.component.html',
})
export class SubscriberCreateComponent {

  validate: boolean = false;

  constructor(
    private store: Store,
    private formBUilder: FormBuilder) {
    AlertMessage("Subscriber created");
  }

  isLoading: boolean = false;

  subscriberCreateForm = this.formBUilder.group({
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  async submit() {
    this.validate = true;

    if (this.subscriberCreateForm.invalid) {
      return;
    }

    this.isLoading = true;
    const data: Subscriber = {
      email: this.subscriberCreateForm.get('email').value,
    }

    this.store.dispatch(new SubscriberCreate(data)).pipe(
      catchError(
        err => {
          this.isLoading = false;
          console.log({ err })
          return of('')
        })
    ).subscribe(
      () => {
        this.isLoading = false;
        AlertMessage("Subscriber created successfull");
      });
  }

}
