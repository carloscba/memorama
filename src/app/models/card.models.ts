export enum CardState {
    SHOW = 'SHOW',
    HIDE = 'HIDE',
    CHECKED = 'CHECKED'
}

export enum GameState {
    LOBBY = 'LOBBY',
    PLAYING = 'PLAYING',
    END = 'END'
}

export interface Card {
    id: number,
    par: string,
    state: CardState,
    disabled: boolean
}

export interface Player {
    id: number,
    name: string,
    score: number
}