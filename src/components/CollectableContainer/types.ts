import { shape, number, func } from 'prop-types';

export default shape({
  source: number.isRequired,
  setPoints: func.isRequired,
});
