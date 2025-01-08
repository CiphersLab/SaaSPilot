import React, { createContext, useState, useContext } from 'react';

interface TotalUsageContextType {
  totalUsage: number;
  setTotalUsage: (value: number) => void;
}

const defaultValue: TotalUsageContextType = {
  totalUsage: 0,
  setTotalUsage: () => {},
};

export const TotalUsageContext = createContext<TotalUsageContextType>(defaultValue);

export const TotalUsageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totalUsage, setTotalUsage] = useState<number>(0);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      {children}
    </TotalUsageContext.Provider>
  );
};

