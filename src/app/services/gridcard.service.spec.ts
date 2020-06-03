import { TestBed } from '@angular/core/testing';
import { GridcardService } from './gridcard.service';
import { Card, CardState } from '../models/card.models'

describe('GridcardService', () => {
  let service: GridcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return a gridCard by size', () => {
    const gridCard = service.buildGrid(4);
    expect(gridCard.length).toEqual(4);
  })

  it('should be return a gridCard by size', () => {
    const gridCard = service.buildGrid(2, false);
    const card = {
      id: 0,
      par: 'A',
      state: CardState.HIDE,
      disabled: false
    }
    expect(gridCard[0]).toEqual(card);
  })  

});
