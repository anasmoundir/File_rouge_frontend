import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  codeArr: any = [];
  toggleCode = (name: string) => {
      if (this.codeArr.includes(name)) {
          this.codeArr = this.codeArr.filter((d: string) => d != name);
      } else {
          this.codeArr.push(name);
      }
  };
}
