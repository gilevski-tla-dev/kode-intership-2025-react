// src/context/DepartmentContext.tsx
import React, { createContext, useState, useContext } from "react";

interface DepartmentContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DepartmentContext = createContext<DepartmentContextType | undefined>(
  undefined
);

export const DepartmentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState<string>("Все");

  return (
    <DepartmentContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </DepartmentContext.Provider>
  );
};

export const useDepartment = () => {
  const context = useContext(DepartmentContext);
  if (!context)
    throw new Error("useDepartment must be used within DepartmentProvider");
  return context;
};
