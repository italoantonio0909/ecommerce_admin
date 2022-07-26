import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SubscriberService } from '../../services/subscriber.service';
import { Subscriber } from '../../entities/Subscriber';

@Component({
  selector: 'app-subscriber-create',
  templateUrl: './subscriber-create.component.html',
})
export class SubscriberCreateComponent {

  constructor(private formBUilder: FormBuilder, private service: SubscriberService) { }

  isLoading: boolean = false;

  subscriberCreateForm = this.formBUilder.group({
    email: new FormControl("", Validators.required),
  });

  async submit() {
    this.isLoading = true;

    try {
      const data: Subscriber = {
        email: this.subscriberCreateForm.get('email').value,
      }

      this.service.subscriberCreate(data).subscribe(() => this.isLoading = false);

    } catch (error) {
    } finally {
      // this.isLoading = false;
    }
  }

}
