import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

import Box from "../components/layouts/Box";
import Grid from "../components/layouts/Grid";

function Page005() {
  const [userData, setUserData] = React.useState([]);
  const [salesData, setSalesData] = React.useState([]);
  const [transportData, setTransportData] = React.useState([]);

  useEffect(() => {
    getUsers();
    getSales();
    getTransport();
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

  const getTransport = async () => {
    try {
      const resTransportDataJSON = await fetch(
        "https://60bafd1e42e1d000176202e4.mockapi.io/learn-react/sale"
      );
      const resTransportData = await resTransportDataJSON.json();
      setTransportData(resTransportData);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(transportData);

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

  const transportDataElement = transportData.map((item, index) => {
    return (
      <div key={item.id}>
        <p>{`Name: ${item.name}`}</p>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <h1>PAGE005</h1>
      <h1>LayoutComponent</h1>
      <section className="app-section">
        <Grid columnNumber={3}>
          <Box>
            <h3>รายชื่อพนักงาน</h3>
            {userDataElement}
          </Box>
          <Box>
            <h3>รายการที่ขายได้และยอดขาย</h3>
            {salesDataElement}
          </Box>
          <Box>
            <h3>รายชื่อขนส่ง</h3>
            {transportDataElement}
          </Box>
        </Grid>
      </section>
    </div>
  );
}

export default Page005;
