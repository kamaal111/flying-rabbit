type ActionType = string;

interface GetNumber {
  payload: number;
  type: ActionType;
}

export const SET_POINTS: ActionType = 'SET_POINTS';
export const SET_CHARACTER_POSITION: ActionType = 'SET_CHARACTER_POSITION';

export const setPoints = (payload: number): GetNumber => ({ payload, type: SET_POINTS });
export const setCharacterPosition = (payload: number): GetNumber => ({
  payload,
  type: SET_CHARACTER_POSITION,
});
