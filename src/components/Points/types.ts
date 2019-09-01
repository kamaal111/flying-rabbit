import { shape, number } from 'prop-types';

const Points = { character: number.isRequired, points: number.isRequired };

export default shape(Points);
