import { Component, EventEmitter, Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  messageInputField:any;
  @Output() valueChange = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  

  Counter = 0;

  sendSms() { 
      this.valueChange.emit(this.messageInputField);
  }
}
