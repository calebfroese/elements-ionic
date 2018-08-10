import { AppActionsUnion } from '../actions/app.actions';

export interface State {
  qanta: { [key: string]: number };
}

export const initialState = {
  qanta: {
    Dark: 0,
    Water: 0,
    Death: 0,
    Life: 0,
    Earth: 0,
    Aether: 0,
    Fire: 0,
    Air: 0,
    Gravity: 0,
    Entropy: 0,
    Time: 0,
    Light: 0,
  },
};

export function reducer(state: State = initialState, action: AppActionsUnion) {
  switch (action.type) {
    default:
      return state;
  }
}

export const getQanta = (state: State) => state.qanta;
