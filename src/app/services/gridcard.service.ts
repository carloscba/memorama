import { Injectable } from '@angular/core';
import { Card, CardState } from '../models/card.models'

@Injectable({
  providedIn: 'root'
})
export class GridcardService {

  gridCard: Array<Card> = []

  constructor() { }

  buildGrid(sizeGrid: number= 20) {
    for(let i = 0; i < (sizeGrid / 2); i++){
      this.gridCard.push({
        id: i,
        par: 'A',
        state: CardState.HIDE
      },{
        id: i,
        par: 'B',
        state: CardState.HIDE        
      })
    }

    return this.gridCard;
  }
}
