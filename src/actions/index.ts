type ActionType = string;

interface SetPoints {
  payload: number;
  type: ActionType;
}

export const SET_POINTS: ActionType = 'SET_POINTS';

export const setPoints = (payload: number): SetPoints => ({ payload, type: SET_POINTS });
