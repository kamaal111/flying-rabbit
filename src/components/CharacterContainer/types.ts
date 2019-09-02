import { number, shape, func, object } from 'prop-types';

const CharacterContainer = {
  source: number.isRequired,
};

const CharacterComPonent = {
  source: number.isRequired,
  screenHeight: number.isRequired,
  characterGoUp: func.isRequired,
  characterGoDown: func.isRequired,
  styles: object.isRequired,
  animationValue: number.isRequired,
};

export const CharacterContainerPropTypes = shape(CharacterContainer);
export const CharacterComponentPropTypes = shape(CharacterComPonent);
