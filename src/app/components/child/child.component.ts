import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

@Input() childText: string = "child component";
@Output() textChange: EventEmitter<string> = new EventEmitter<string>();
notifyParent() {
  debugger
  this.textChange.emit(this.childText);
}
}
