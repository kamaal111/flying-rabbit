import { number, shape, object } from 'prop-types';

export default shape({
  backgroundSource: number.isRequired,
  styles: object,
});
