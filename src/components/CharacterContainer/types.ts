import { number, shape, func, object } from 'prop-types';

const Source = {
  source: number.isRequired,
};
const CharacterContainer = {
  ...Source,
  screenHeight: number.isRequired,
  count: number.isRequired,
  characterGoUp: func.isRequired,
  characterGoDown: func.isRequired,
  styles: object.isRequired,
  animationValue: number.isRequired,
};

export const CharacterContainerPropTypes = shape(Source);
export const CharacterComponentPropTypes = shape(CharacterContainer);
