import React, { createContext, useContext, useState } from 'react';

const UIStateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const UIStateProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const currentColor = '#03C9D7';

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    <UIStateContext.Provider value={{ activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, currentColor }}>
      {children}
    </UIStateContext.Provider>
  );
};

export const useUIState = () => useContext(UIStateContext);
