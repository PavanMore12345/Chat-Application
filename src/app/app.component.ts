import { Component, OnInit } from '@angular/core';
import "jquery"
import { Message } from './message-model';
declare var $, chosen: JQueryStatic;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mobileChatApp';
  text: any;
  message_side: any;
  receivedMessage:Message = new Message()
  
  
  messages = [];
  messageInputField: any;

  ngOnInit() {
    this.receivedMessage.type = "receive";
    this.receivedMessage.text = "hello";
    this.receivedMessage.messageType = "image";
    this.receivedMessage.src = "assets/img/ico-avtar.jpeg"
    this.receivedMessage.image = "assets/img/ico-avtar.jpeg";
    this.receivedMessage.dateCreated = new Date(); 
    this.messages.push(this.receivedMessage)
  }
  sendSms() {
    console.log("text");
    if (this.messageInputField) {
      var tempData:Message = new Message();
      tempData.type = "send";
      tempData.text = this.messageInputField;
      tempData.messageType = "text";
      tempData.image = "assets/img/man.png";
      tempData.dateCreated = new Date();
      this.messages.push(tempData)
      console.log("messages", this.messages)
      this.messageInputField = '';
    }
  }
}
