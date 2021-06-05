import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Page001() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const resUsers = await fetch(
      "https://60bafd1e42e1d000176202e4.mockapi.io/learn-react/users"
    );
    // console.log(resUsers);
    const resUsersJson = await resUsers.json();
    // console.log(resUsersJson);
    setUsers(resUsersJson);
  };

  const userElement = users.map((item, index) => {
    return <h3 key={item.id}>{item.email}</h3>;
  });

  return (
    <div>
      <Navbar />
      <h1>PAGE002</h1>
      <h1>useEffect</h1>
      <section className="app-section">
        <div className="app-container">
          <h1>User Email</h1>
          {userElement}
        </div>
      </section>
    </div>
  );
}

export default Page001;
