import { createContext, ReactElement, useState } from "react";

interface LoveContextData {
  yourName: string;
  loveName: string;
  loveScore: {
    percentage: number;
  };
  setLoveScore: (score: {}) => void;
  setYourName: (name: string) => void;
  setLoveName: (name: string) => void;
}

interface LoveContextProps {
  children: ReactElement;
}

export const LoveContext = createContext({} as LoveContextData);

export function LoveContextProvider({ children }: LoveContextProps) {
  const [yourName, setYourName] = useState("");
  const [loveName, setLoveName] = useState("");
  const [loveScore, setLoveScore] = useState({
    percentage: null,
  });

  const data = {
    yourName,
    loveName,
    setYourName,
    setLoveName,
    loveScore: {
      percentage: loveScore.percentage,
    },
    setLoveScore,
  };

  return <LoveContext.Provider value={data}>{children}</LoveContext.Provider>;
}
