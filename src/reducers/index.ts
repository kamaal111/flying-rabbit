import { combineReducers } from 'redux';

import characterPosition from './characterPosition';
import points from './points';

export default combineReducers({ characterPosition, points });
