export enum CardState {
    SHOW = 'SHOW',
    HIDE = 'HIDE',
    CHECKED = 'CHECKED'
}

export interface Card {
    id: number,
    par: string,
    state: CardState,
    disabled: boolean
}