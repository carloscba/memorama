import { Component, OnInit } from '@angular/core';
import { GridcardService } from 'src/app/services/gridcard.service';
import { Card } from 'src/app/models/card.models';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gridCard: Array<Card> = []
  constructor(private gridcardService: GridcardService) {

   }

  ngOnInit(): void {
    this.gridCard = this.gridcardService.buildGrid(20);
  }

  onSelectCardHandler(card: Card): void {
    console.log(card);
  }

}
