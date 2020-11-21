import { Component } from '@angular/core';
import { CARD_IMAGES } from './utils/card-images';
import { CardData } from './utils/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  cardImages = CARD_IMAGES;
  cards: Array<CardData> = [];
  flippedCards: Array<CardData> = [];
  matchedCount = 0;

  constructor() {
  }
  ngOnInit(): void {
    this.setupCards();
  }
  setupCards(): void {
    this.cards = [];
    this.cards = this.cardImages.map(item => {
      return {
        imageUrl: item,
        state: 'default'
      }
    })
    this.cards = this.shuffleArray(this.cards);
  }

  shuffleArray(arr): Array<CardData> {
    return arr.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }
  cardClicked(index: number): void {
    const cardInfo = this.cards[index];
    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);
      this.flippedCards.length > 1 ? this.checkForCardMatch() : '';
    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();
    }
  }
  checkForCardMatch(): void {
    setTimeout(() => {
      const [cardOne, cardTwo] = this.flippedCards;
      const nextState = cardOne.imageUrl === cardTwo.imageUrl ? 'matched' : 'default';
      const len = this.cardImages.length;
      cardOne.state = cardTwo.state = nextState;
      this.flippedCards = [];
      if (nextState === 'matched') {
        this.matchedCount++;
        this.matchedCount === (len / 2) ? this.resetCards() : '';
      }
    }, 1000);
  }
  resetCards(): void {
    this.matchedCount = 0;
    this.setupCards();
  }
}
