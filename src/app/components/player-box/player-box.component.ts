import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/models/card.models';

@Component({
  selector: 'app-player-box',
  templateUrl: './player-box.component.html',
  styleUrls: ['./player-box.component.scss']
})
export class PlayerBoxComponent implements OnInit {

  @Input('player') inputPlayer: Player = null;
  @Input('currentPlayer') inputCurrentPlayer: Player = null;

  constructor() { }

  ngOnInit(): void {
  }

}
