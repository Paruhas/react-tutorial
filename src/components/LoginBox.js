import React, { useContext } from "react";
import { AuthContext } from "../pages/Page003";

const fakeUserData = {
  username: "user1",
  password: "user1",
  firstName: "Iam",
  lastName: "User1",
};

function LoginBox() {
  const { authState, authDispatch } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    authDispatch({ type: "login", payload: fakeUserData });
  };

  const logout = () => {
    authDispatch({ type: "logout" });
  };

  if (authState) {
    return (
      <>
        <p>username = {authState.username}</p>
        <p>fullName = {authState.fullName}</p>
        <p>
          <button onClick={logout}>Log Out</button>
        </p>
      </>
    );
  }

  return (
    <form>
      <p>
        <input type="text" placeholder="username" />
      </p>
      <p>
        <input type="password" placeholder="password" />
      </p>
      <p>
        <button onClick={login}>Submit</button>
      </p>
    </form>
  );
}

export default LoginBox;
