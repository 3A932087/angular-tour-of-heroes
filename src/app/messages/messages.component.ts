import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  //在建立 MessagesComponent 的例項時 把 MessageService 的例項注入到這個屬性中。
  constructor(public messageService: MessageService) {}

}
