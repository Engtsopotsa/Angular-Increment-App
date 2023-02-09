import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent{
  @Output() messageEvent = new EventEmitter<string>();

  handleClick(){
    console.log('i added 1')
  this.messageEvent.emit();
  }

}