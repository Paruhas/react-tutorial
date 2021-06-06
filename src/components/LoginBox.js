import React from "react";

function LoginBox(props) {
  const { auth } = props;

  if (auth) {
    return (
      <>
        <p>username = {"username"}</p>
        <p>fullName = {"firstName + lastName"}</p>
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
