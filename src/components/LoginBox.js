import React, { useContext } from "react";
import { AuthContext } from "../pages/Page003";

const fakeUserData = {
  username: "user1",
  password: "user1",
  firstName: "Iam",
  lastName: "User1",
};

function LoginBox() {
  const { userAuth, setUserAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setUserAuth(fakeUserData);
  };

  const logout = () => {
    setUserAuth(null);
  };

  if (userAuth) {
    return (
      <>
        <p>username = {userAuth?.username}</p>
        <p>fullName = {userAuth?.firstName + " " + userAuth?.lastName}</p>
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
