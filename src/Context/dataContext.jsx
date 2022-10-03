import { createContext, useState } from "react";

const dataContext = createContext();

function DataProvider({ children }) {
  const [name, setName] = useState("");

  return (
    <dataContext.Provider value={{ name, setName }}>
      {children}
    </dataContext.Provider>
  );
}

export { dataContext, DataProvider };
