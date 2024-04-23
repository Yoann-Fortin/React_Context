/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const MoodContext = createContext();

export function MoodProvider ({ children }) {
   const [mood, setMood] = useState(false);

   return (
      <MoodContext.Provider value={{ mood, setMood }}>
         {children}
      </MoodContext.Provider>
   )
}

export const useMood = () => useContext(MoodContext);