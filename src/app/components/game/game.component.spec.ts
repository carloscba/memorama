import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return next player', () => {
    const players = [
      {id: 1, name: 'player 1', score: 0},
      {id: 2, name: 'player 2', score: 0},
      {id: 3, name: 'player 3', score: 0}
    ]

    const currentPlayer = {id: 1, name: 'player 1', score: 0};

    const nextPlayer = component.getNextPlayer(players, currentPlayer)
    expect(nextPlayer.id).toEqual(2);
  });  

  it('should return first player', () => {
    const players = [
      {id: 1, name: 'player 1', score: 0},
      {id: 2, name: 'player 2', score: 0},
      {id: 3, name: 'player 3', score: 0}
    ]

    const currentPlayer = {id: 3, name: 'player 3', score: 0};

    const nextPlayer = component.getNextPlayer(players, currentPlayer)
    expect(nextPlayer.id).toEqual(1);
  });    

  it('should update score', () => {
    const players = [
      {id: 1, name: 'player 1', score: 0},
      {id: 2, name: 'player 2', score: 0},
      {id: 3, name: 'player 3', score: 0}
    ]

    const currentPlayer = {id: 1, name: 'player 3', score: 0};
    
    let newPlayers = component.updateScore(players, currentPlayer);
    expect(newPlayers[0].score).toEqual(10);
  })
});
