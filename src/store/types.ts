export enum State {
    Unset = 'Unset',
    Set = 'Set',
    Error = 'Error'
}

export interface BaseAction {
    type: string;
    payload?: any;
}