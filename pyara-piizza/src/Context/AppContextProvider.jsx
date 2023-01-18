import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

function AppContextProvider({ children }) {
  let [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  const ToggleHandler = () => {
    setIsAuth(!isAuth);
  };

  return (
    <Context.Provider value={{ isAuth, login, logout, ToggleHandler }}>
      {children}
    </Context.Provider>
  );
}

export default AppContextProvider;
