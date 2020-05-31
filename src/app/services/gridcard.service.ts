import { Injectable } from '@angular/core';
import { Card, CardState } from '../models/card.models'

@Injectable({
  providedIn: 'root'
})
export class GridcardService {

  gridCard: Array<Card> = []

  constructor() { }

  buildGrid(sizeGrid: number= 20, random: boolean = true) {
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

    return (random) ?  this.randomize(this.gridCard) : this.gridCard;
  }

  /**
   * randomizes array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
  randomize(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }  
}
