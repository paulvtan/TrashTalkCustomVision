import React, { createContext, useState } from "react";

export const CanData = createContext([]);

const CanDataContext = ({ children }) => {
  const [canData, setCanData] = useState({ howick: 2, "bucklands beach": 3 });

  // Api calls use setCanData(new data)

  return (
    <CanData.Provider value={{ canData, setCanData }}>
      {children}
    </CanData.Provider>
  );
};

export default CanDataContext;
