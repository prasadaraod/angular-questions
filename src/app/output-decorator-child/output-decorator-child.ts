import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-output-decorator-child',
  imports: [FormsModule],
  templateUrl: './output-decorator-child.html',
  styleUrl: './output-decorator-child.css'
})
export class OutputDecoratorChild {
  @Output() sendMessageEmitter = new EventEmitter<string>();
  txtChildInput = '';
  sendMessageToParent() {
    console.log('output decorator child');
    this.sendMessageEmitter.emit(this.txtChildInput);
  }
}
