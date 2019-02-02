import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  message: string[] = []

  add(message) {
    this.message.push(message)
  }

  clear() {
    this.message = []
  }

  constructor() { }
}
