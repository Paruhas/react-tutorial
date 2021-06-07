import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./css/Page001.css";

const clearInput = {
  input1: "",
  input2: "",
};

function Page001() {
  const [input, setInput] = useState(clearInput);
  const [inputEdit, setInputEdit] = useState(null);
  const [inputArray, setInputArray] = useState([]);

  // FNs input
  const onInputChange = (event) => {
    const { name, value } = event.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onInputEditChange = (event) => {
    const { name, value } = event.target;

    setInputEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // FNs add
  const inputSubmit = (event) => {
    event.preventDefault();
    const newInput = { ...input, id: Date.now().toString() };
    setInputArray((prev) => [newInput, ...prev]);
    setInput(clearInput);
  };

  // FNs delete
  const inputDelete = (inputId) => {
    setInputArray((prev) => prev.filter((item) => item.id !== inputId));
  };

  // FNs edit
  const inputEditSubmit = (event) => {
    event.preventDefault();

    // เอา previousValue ของแต่ละ index ใน Array มา map
    // แล้วเช็คว่า id ของแต่ละตัวใน "inputArray"(prev) ตรงกับ "inputEdit"
    // ถ้าไม่ตรง return ค่าเดิมของมัน ถ้าตรง (===ตัวที่เรากดEditมา) ให้แทนค่าใหม่ที่Editเข้าไป
    setInputArray((prev) => {
      return prev.map((item) => {
        if (item.id !== inputEdit.id) {
          return item;
        }
        return inputEdit;
      });
    });

    setInputEdit(null);
  };

  // ELEMENTs
  const inputElement = inputArray.map((item) => {
    return (
      <div className="inputArray" key={item.id}>
        <p>Input1 Text: {item.input1}</p>
        <p>Input2 Text: {item.input2}</p>
        <span className="inputArray-btn-grp">
          <button onClick={() => setInputEdit(item)}>EDIT</button>
          <button onClick={() => inputDelete(item.id)}>DELETE</button>
        </span>
      </div>
    );
  });

  let inputEditElement = null;
  if (inputEdit) {
    inputEditElement = (
      <div className="editInput">
        <div className="editInput-bg" onClick={() => setInputEdit(null)}></div>
        <div className="editInput-content">
          <form className="editInput-form" onSubmit={inputEditSubmit}>
            <p>Input1 Text: </p>
            <textarea
              rows="5"
              name="input1"
              value={inputEdit.input1}
              onChange={onInputEditChange}
            />
            <p>Input2 Text: </p>
            <input
              type="text"
              name="input2"
              value={inputEdit.input2}
              onChange={onInputEditChange}
            />
            <button>SUBMIT EDIT</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <h1>PAGE001</h1>
      <h1>USE-STATE</h1>
      <section className="app-section">
        <div className="app-container">
          <div className="input-box">
            <div className="input-container">
              <h3>EXAMPLE TEXT</h3>
              <p>Input1 Text: {input.input1}</p>
              <p>Input2 Text: {input.input2}</p>
              <form onSubmit={inputSubmit}>
                <p>
                  <textarea
                    rows="5"
                    name="input1"
                    value={input.input1}
                    onChange={onInputChange}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    name="input2"
                    value={input.input2}
                    onChange={onInputChange}
                  />
                </p>
                <p>
                  <button>+ ADD</button>
                </p>
              </form>
            </div>
            <div className="inputArray-container">{inputElement}</div>
          </div>
        </div>
      </section>
      {inputEditElement}
    </div>
  );
}

export default Page001;
