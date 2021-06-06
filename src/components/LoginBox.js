import React, { useContext } from "react";
import { AuthContext } from "../pages/Page003";

function LoginBox() {
  const user = useContext(AuthContext);

  if (user) {
    return (
      <>
        <p>username = {user.username}</p>
        <p>fullName = {user.firstName + " " + user.lastName}</p>
        <p>
          <button>Log Out</button>
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
        <button>Submit</button>
      </p>
    </form>
  );
}

export default LoginBox;
