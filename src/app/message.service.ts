import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

//add() 方法往快取中新增一條訊息
  add(message: string) {
    this.messages.push(message);
  }
//clear() 方法用於清空快取。
  clear() {
    this.messages = [];
  }
}