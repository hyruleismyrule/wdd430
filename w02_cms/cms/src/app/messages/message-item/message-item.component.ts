import { Component, Input } from '@angular/core';
import { contactService } from 'src/app/contacts/contact.service';
import { Message } from '../message.model';
import { Contact } from 'src/app/contacts/contact.model';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent {
  @Input() message: Message;
  messageSender: string;

  constructor(private contactService: contactService) {

  }

  ngOnInit() {
    // console.log(this.message);
    //   if (this.message.sender) {
    //     console.log(this.message.sender);
    //     const contact: Contact = this.contactService.getContact(this.message.sender);
    //     this.messageSender = contact.name;
    //     console.log(this.messageSender);
    //   }
    //   else {
    //     this.messageSender = "Unknown";
    //   }
    // }
    this.messageSender = "Unknown";

  }
}
