import { SET_POINTS } from '../actions';

interface Action {
  type: string;
  payload: any;
}

const initialState: number = 0;

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case SET_POINTS:
      return payload;
    default:
      return state;
  }
};
