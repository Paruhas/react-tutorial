import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./css/Page001.css";

const clearInput = {
  input1: "",
  input2: "",
};

function Page001() {
  const [input, setInput] = useState(clearInput);
  const [inputArray, setInputArray] = useState([]);

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputSubmit = (event) => {
    event.preventDefault();
    const newInput = { ...input, id: Date.now().toString() };
    setInputArray((prev) => [newInput, ...prev]);
    setInput(clearInput);
  };

  const inputElement = inputArray.map((item, index) => {
    return (
      <div className="inputArray" key={item.id}>
        <p>Input1 Text: {item.input1}</p>
        <p>Input2 Text: {item.input2}</p>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <h1>PAGE001</h1>
      <h1>USE-STATE</h1>
      <section className="app-section">
        <div className="app-container">
          <div>
            <div className="input-container">
              <h3>EXAMPLE TEXT</h3>
              <p>Input1 Text: {input.input1}</p>
              <p>Input2 Text: {input.input2}</p>
            </div>
            <form onSubmit={inputSubmit}>
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
              <button>+ ADD</button>
            </form>
            <div className="inputArray-container">{inputElement}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page001;
