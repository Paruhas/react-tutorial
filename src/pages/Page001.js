import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./css/Page001.css";

function Page001() {
  const [input, setInput] = useState({
    input1: "",
    input2: "",
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <h1>PAGE001</h1>
      <h1>USE-STATE</h1>
      <section className="app-section">
        <div className="app-container">
          <div className="input-container">
            <textarea
              rows="5"
              name="input1"
              value={input.input1}
              onChange={onInputChange}
            />
            <input
              type="text"
              name="input2"
              value={input.input2}
              onChange={onInputChange}
            />
          </div>
          <div className="input-container">
            <p>Input1 Text: {input.input1}</p>
            <p>Input2 Text: {input.input2}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page001;
