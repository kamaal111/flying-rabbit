import { number, shape, object } from 'prop-types';

export default shape({
  rabbitSource: number.isRequired,
  styles: object,
});
