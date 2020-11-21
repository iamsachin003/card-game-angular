import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cardAnimation } from '../utils/animation';
import { CardData } from '../utils/card.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: cardAnimation
})
export class CardComponent implements OnInit {
  @Input() card: CardData;
  @Output() cardClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
