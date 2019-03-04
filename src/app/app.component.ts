import { Component } from '@angular/core';
import "jquery"
declare var $, chosen: JQueryStatic;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobileChatApp';
  text:any;
  message_side:any;
  sendMessage = ['Hey Komal'];
  messageInputField:any;
  sendSms() {
    console.log("text");
    if(this.messageInputField) {
    this.sendMessage.push(this.messageInputField)
    this.messageInputField = '';
    }

  }
}
