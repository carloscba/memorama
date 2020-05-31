import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/card.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('card')
  inputCard: Card = null;

  @Output()
  onSelectCard = new EventEmitter<Card>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.onSelectCard.emit(this.inputCard);
  }

}
