import { Component, OnInit } from '@angular/core';
import { GridcardService } from 'src/app/services/gridcard.service';
import { Card, CardState, Player } from 'src/app/models/card.models';

const TIME_TO_REVEAL = 2000;
const SCORE_STEP = 10;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  firstCardSelection: Card = null;
  sizeGrid: number = null;
  startedGame: boolean = false;
  gridCard: Array<Card> = [];
  players: Array<Player> = [];
  currentPlayer: Player = null;

  constructor(private gridcardService: GridcardService) {

  }

  ngOnInit(): void {
    
  }

  setSizeGrid(e) : void {
    this.sizeGrid = parseInt(e.target.value)
  }

  startGame() : void {
    this.startedGame = true;
    this.players.push({
      id : 1,
      name: "player 1",
      score: 0
    },{
      id : 2,
      name: "player 2",
      score: 0
    },{
      id : 3,
      name: "player 3",
      score: 0
    })

    this.setCurrentPlayer(this.players[0]);
    this.gridCard = this.gridcardService.buildGrid(this.sizeGrid);
  }

  setCurrentPlayer(player: Player) {
    this.currentPlayer = player;
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
    this.currentPlayer = this.getNextPlayer(this.players, this.currentPlayer);
  }

  getNextPlayer(players: Array<Player>, currentPlayer: Player) {
    let currentIndex = players.findIndex(player => player.id === currentPlayer.id);
    return (currentIndex === players.length-1) ? players[0] : players[currentIndex+1];
  }

  checkPar(firstCardSelection: Card, currentCard: Card) {
    
    this.gridCard = this.cardToDisabled(this.gridCard, true);

    if(firstCardSelection.id === currentCard.id) {
      this.successsPar();
    } else {
      this.errorPar();
    }
    
  }

  successsPar() :void {
    setTimeout(()=>{
      this.gridCard = this.cardToChecked(this.gridCard, this.firstCardSelection.id);
      this.players = this.updateScore(this.players, this.currentPlayer);
      this.resetTurn();
    }, TIME_TO_REVEAL); 
  }

  errorPar() :void {
    setTimeout(()=>{
      this.gridCard = this.cardToHide(this.gridCard);
      this.resetTurn();
    }, TIME_TO_REVEAL)
  }

  updateScore(players: Array<Player>, currentPlayer: Player) : Array<Player> {
    return players.map( player => (player.id === currentPlayer.id) ? { ...player, score: (player.score + SCORE_STEP)} : { ...player });
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