import { screenHeight } from '../dimensions';
import { SET_CHARACTER_POSITION } from '../actions';

interface Action {
  type: string;
  payload: any;
}

const initialState: number = screenHeight / 2;

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case SET_CHARACTER_POSITION:
      return payload;
    default:
      return state;
  }
};
