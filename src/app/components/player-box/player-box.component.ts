import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-box',
  templateUrl: './player-box.component.html',
  styleUrls: ['./player-box.component.scss']
})
export class PlayerBoxComponent implements OnInit {

  @Input('name') inputName: string = '';
  @Input('score') inputScore: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
