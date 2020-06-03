import { Component, OnInit } from '@angular/core';
import { GridcardService } from 'src/app/services/gridcard.service';
import { Card, CardState } from 'src/app/models/card.models';

const TIME_TO_REVEAL = 2000;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  firstCardSelection: Card = null;
  currentPlayer: string = null;
  sizeGrid: number = null;

  gridCard: Array<Card> = []
  constructor(private gridcardService: GridcardService) {

  }

  ngOnInit(): void {
    
  }

  setSizeGrid(e) : void {
    this.sizeGrid = parseInt(e.target.value)
  }
  startGame() : void {
    this.gridCard = this.gridcardService.buildGrid(this.sizeGrid);
  }

  onSelectCardHandler(card: Card): void {
    
    this.gridCard = this.cardToShow(this.gridCard, card);

    if(!this.firstCardSelection) {
      this.firstCardSelection = card
    } else {
      this.checkPar(this.firstCardSelection, card)
    }
  }

  resetTurn() {
    this.firstCardSelection = null;
    this.gridCard = this.cardToDisabled(this.gridCard, false);
  }

  checkPar(firstCardSelection: Card, currentCard: Card) {
    
    this.gridCard = this.cardToDisabled(this.gridCard, true);

    if(firstCardSelection.id === currentCard.id) {
      setTimeout(()=>{
        this.gridCard = this.cardToChecked(this.gridCard, this.firstCardSelection.id) 
        this.resetTurn();
      }, TIME_TO_REVEAL)
    } else {
      setTimeout(()=>{
        this.gridCard = this.cardToHide(this.gridCard);
        this.resetTurn();
      }, TIME_TO_REVEAL)
    }
    
  }

  cardToDisabled(gridCard: Array<Card>, disabled: boolean) : Array<Card> {
    return gridCard = gridCard.map( card => {
      return { ...card, disabled }
    })
  }

  cardToShow(gridCard: Array<Card>, currentCard: Card) : Array<Card> {
    return gridCard = gridCard.map( card => (card.id === currentCard.id && card.par === currentCard.par) ? { ...card, state: CardState.SHOW } : { ...card })
  }

  cardToHide(gridCard: Array<Card>) : Array<Card> {
    return gridCard = gridCard.map( card => (card.state === CardState.SHOW) ? { ...card, state: CardState.HIDE } : { ...card })
  }

  cardToChecked(gridCard: Array<Card>, id: number): Array<Card> {
    return gridCard.map( card => (card.id === id) ? { ...card, state: CardState.CHECKED } : { ...card })
  }

}
