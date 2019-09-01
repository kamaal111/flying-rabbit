import { SET_POINTS } from '../actions';

interface InitialState {
  points: number;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: InitialState = { points: 0 };

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case SET_POINTS:
      return { ...state, points: payload };
    default:
      return state;
  }
};
