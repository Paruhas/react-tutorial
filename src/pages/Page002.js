import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import "./css/Page002.css";

function Page001() {
  const [users, setUsers] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
    return (
      <h3 className="app-container-h3" key={item.id}>
        {item.email}
      </h3>
    );
  });

  function openPopup() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  let popupElement = null;
  if (isPopupOpen) {
    popupElement = <Popup closePopup={closePopup} />;
  }

  return (
    <div>
      <Navbar />
      <h1>PAGE002</h1>
      <h1>useEffect</h1>
      <section className="app-section">
        <div className="app-container">
          <button className="app-container-popup-btn" onClick={openPopup}>
            OPEN POPUP
          </button>
          <h1 className="app-container-h1">User Email</h1>
          {userElement}
        </div>
      </section>
      {popupElement}
    </div>
  );
}

export default Page001;
