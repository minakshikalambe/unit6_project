import React, { createContext, useState } from "react";

export const SignNameContext = createContext();

export const SignNameContextProvider = ({ children }) => {
  const [userName, setUserName] = useState({
    email: "",
    name: "",
  });
  console.log(userName);

  return (
    <SignNameContext.Provider value={{ userName, setUserName }}>
      {children}
    </SignNameContext.Provider>
  );
};

export default SignNameContext;