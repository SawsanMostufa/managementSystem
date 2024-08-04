import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  childText:string="child component";
  handleTextChange(newText: string) {
    this.childText =this.childText+''+ newText;
  }
}
