import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

import Box from "../components/layouts/Box";

function Page005() {
  const [userData, setUserData] = React.useState([]);
  const [salesData, setSalesData] = React.useState([]);

  useEffect(() => {
    getUsers();
    getSales();
  }, []);

  const getUsers = async () => {
    try {
      const resUserDataJSON = await fetch(
        "https://60bafd1e42e1d000176202e4.mockapi.io/learn-react/users"
      );
      const resUserData = await resUserDataJSON.json();
      setUserData(resUserData);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(userData);

  const getSales = async () => {
    try {
      const resSalesDataJSON = await fetch(
        "https://60bafd1e42e1d000176202e4.mockapi.io/learn-react/sale"
      );
      const resSalesData = await resSalesDataJSON.json();
      setSalesData(resSalesData);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(salesData);

  const userDataElement = userData.map((item, index) => {
    return (
      <ul key={item.id}>
        <li>{`Avatar: ${item.avatar}`}</li>
        <li>{`Name: ${item.firstName} ${item.lastName}`}</li>
        <li>{`E-Mail: ${item.email}`}</li>
      </ul>
    );
  });

  const salesDataElement = salesData.map((item, index) => {
    return (
      <ol key={item.id}>
        <li>{`Name: ${item.name}`}</li>
        <li>{`TotalSale: ${item.totalSale}`}</li>
      </ol>
    );
  });

  return (
    <div>
      <Navbar />
      <h1>PAGE005</h1>
      <h1>LayoutComponent</h1>
      <section className="app-section">
        <Box>
          <h3>รายชื่อพนักงาน</h3>
          {userDataElement}
        </Box>
        <div className="box">
          <h3>รายการที่ขายได้และยอดขาย</h3>
          {salesDataElement}
        </div>
      </section>
    </div>
  );
}

export default Page005;
