export enum CardState {
    SHOW = 'SHOW',
    HIDE = 'HIDE',
    CHECKED = 'CHECKED',
    DISABLED = 'DISABLED'
}

export interface Card {
    id: number,
    par: string,
    state: CardState
}