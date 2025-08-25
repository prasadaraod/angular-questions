import { Component } from '@angular/core';
import { OutputDecoratorChild } from "../output-decorator-child/output-decorator-child";

@Component({
  selector: 'app-output-decorator',
  imports: [OutputDecoratorChild],
  templateUrl: './output-decorator.html',
  styleUrl: './output-decorator.css'
})
export class OutputDecorator {
  messageFromChild = "";
  receiveMessageFromChild(msg: string) {
    console.log(msg);
    this.messageFromChild = msg;
  }
}
