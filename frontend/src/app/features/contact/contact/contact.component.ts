import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;

  submit(form: any): void {
    if (form.invalid) return;
    this.submitted = true;
  }
}
