import React from "react";
import LoginArea from "../components/LoginArea";
import Navbar from "../components/Navbar";
import "./css/Page003.css";

const fakeUserData = {
  username: "user1",
  password: "user1",
  firstName: "Iam",
  lastName: "User1",
};

function Page003() {
  return (
    <div>
      <Navbar />
      <h1>PAGE003</h1>
      <h1>useContext</h1>
      <section className="app-section">
        <div className="app-container">
          <LoginArea auth={null} />
        </div>
      </section>
    </div>
  );
}

export default Page003;
