import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

function AppContextProvider({ children }) {
  let [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const logout = () => {
    setIsAuth(false);
    const details = {
      name: "",
      email: "",
    };
    localStorage.setItem("details", JSON.stringify(details));
    setTimeout(() => {
      window.location.reload();
    },2000)
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
