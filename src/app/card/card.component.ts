import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  title: string = 'My Card Title';
  imgUrl: string =
    'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';

  textColor: string = '';

  cardDate: Date = new Date();

  changeTitle() {
    this.card.title = 'This title has been changed';
  }
  inputHandler(event: any) {
    this.title = event.target.value;
  }
  changeHandler() {
    console.log(this.title);
  }

  ngOnInit() {}
}
