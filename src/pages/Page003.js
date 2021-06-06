import React, { createContext, useReducer, useState } from "react";
import LoginArea from "../components/LoginArea";
import Navbar from "../components/Navbar";
import "./css/Page003.css";

export const AuthContext = createContext();

function Page003() {
  const [userAuth, setUserAuth] = useState(null);

  const [state, dispatch] = useReducer(authReducer, authInitialState);

  return (
    <div>
      <Navbar />
      <h1>PAGE003</h1>
      <h1>useContext</h1>
      <AuthContext.Provider value={{ userAuth, setUserAuth }}>
        <section className="app-section">
          <div className="app-container">
            <LoginArea />
          </div>
        </section>
      </AuthContext.Provider>
    </div>
  );
}

export default Page003;
