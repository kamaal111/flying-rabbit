import { shape, number } from 'prop-types';

const GameState = { points: number.isRequired };
const Points = { gameState: shape(GameState).isRequired };

export default shape(Points);
