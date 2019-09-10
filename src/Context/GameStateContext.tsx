import { default as React, createContext, useState, useContext } from 'react';

import { screenHeight } from '../dimensions';

// export const PointsContext = createContext(useState(0));
export const CharacterPositionContext = createContext([]);

export const CharacterPositionProvider = ({ children }) => (
  <CharacterPositionContext.Provider value={useState(screenHeight / 2)}>
    {children}
  </CharacterPositionContext.Provider>
);

export const useCharacterPositionValue = () => useContext(CharacterPositionContext);
