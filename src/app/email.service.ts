import { Injectable } from '@angular/core';
import { ContactModel } from './contact-model.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  public getContactEmails() {
    let messages: ContactModel[];
    messages=[
      new ContactModel ('email', 'reason', 'description'),
    ]

    
    
  }



  constructor() { }
}
