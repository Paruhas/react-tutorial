import React, { useEffect } from "react";
import "./css/Popup.css";

function Popup(props) {
  // ใช้ useEffect กำหนด style ของ HTML DOM documentElement
  // เมื่อทำการ เปิด Popup เป็น overflow-y: hidden; ทำให้ใช้ scrollbar ไม่ได้ แล้วคืนค่าเดิมเมื่อปิด Popup
  // return ใน Fn useEffect === cleanUp ซึ่งทำงานเมื่อ component unmounted / state มีการเปลี่ยนแปลง
  useEffect(() => {
    // console.log("OPEN");
    document.documentElement.style.overflowY = "hidden";
    return () => {
      // console.log("CLOSE");
      document.documentElement.style.overflowY = "scroll";
    };
  }, []);

  return <div className="popup-div" onClick={props.closePopup}></div>;
}

export default Popup;
