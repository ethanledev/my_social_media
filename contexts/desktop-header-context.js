import { createContext, useState } from "react";

export const DesktopHeaderContext = createContext();

const DesktopHeaderProvider = ({ children }) => {
  const [dropdown, setDropdown] = useState("");

  const toggleDropdown = (type) => {
    if (type === dropdown) {
      setDropdown("");
    } else {
      setDropdown(type);
    }
  };

  return (
    <DesktopHeaderContext.Provider value={{ dropdown, toggleDropdown }}>
      {children}
    </DesktopHeaderContext.Provider>
  );
};

export default DesktopHeaderProvider;
