import { createContext, useState } from 'react';

import { screenHeight } from '../dimensions';

export const PointsContext = createContext(useState(0));
export const CharacterPositionContext = createContext(useState(screenHeight / 2));
