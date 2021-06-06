import React, { createContext, useReducer } from "react";
import LoginArea from "../components/LoginArea";
import Navbar from "../components/Navbar";
import "./css/Page003.css";

export const AuthContext = createContext();

const authReducer = (state, action) => {
  if (action.type === "login") {
    return {
      username: action.payload.username,
      fullName: action.payload.firstName + " " + action.payload.lastName,
    };
  }
  if (action.type === "logout") {
    return null;
  }
  return state;
};

const authInitialState = null;

function Page003() {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);

  return (
    <div>
      <Navbar />
      <h1>PAGE003</h1>
      <h1>useContext</h1>
      <AuthContext.Provider value={{ authState, authDispatch }}>
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
