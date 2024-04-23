"use client"
import { useState,useEffect, createContext, useContext } from "react";

const heroContext = createContext();
export const useHeroContext = () => {
  return useContext(heroContext);
};

export const HeroContextProvider = ({ children }) => {
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLogoVisible(true), 7500);
  });
  // useEffect hook shared by all components consuming this context
  useEffect(() => {
    // Example useEffect logic
    console.log("useEffect executed");
  }, []);

  const contextValue = {
    isLogoVisible,
    isVisible,
    setIsLogoVisible,
    setIsVisible
  };



  return (
    <heroContext.Provider value={contextValue}>
      {children}
    </heroContext.Provider>
  );
};
