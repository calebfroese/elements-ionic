import { AppActions, AppActionsUnion } from '../actions/app.actions';

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
    case AppActions.UpdateQanta:
      return {
        ...state,
        qanta: { ...state.qanta, [action.payload.type]: action.payload.value },
      };

    case AppActions.AddRandomQanta: {
      let qanta = { ...state.qanta };
      for (let i = 0; i < action.payload; i++) {
        const toAdd = QANTA_ARR[Math.floor(Math.random() * QANTA_ARR.length)];
        qanta[toAdd]++;
      }
      return { ...state, qanta };
    }

    default:
      return state;
  }
}

export const getQanta = (state: State) => state.qanta;

const QANTA_ARR = [
  'Dark',
  'Water',
  'Death',
  'Life',
  'Earth',
  'Aether',
  'Fire',
  'Air',
  'Gravity',
  'Entropy',
  'Time',
  'Light',
];
