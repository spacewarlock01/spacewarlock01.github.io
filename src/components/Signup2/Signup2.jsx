import React, { useState } from "react";
import "./Signup2.css";
function Signup2() {
  const [inputList, setInputList] = useState([{ username: "", password: "" }]);

  function handleChange(event, index) {
    const { name, value } = event.target;

    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  }

  function handleAddInput() {
    const list = [...inputList];
    if (list.length >= 4) {
      window.alert("Maximum 4 members can be added");
      return;
    }
    list.push({ username: "", password: "" });
    setInputList(list);
  }

  function handleRemoveInput(index) {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  }
  return (
    <div className="signup2">
      <h3>Hello User</h3>
      <h5 className="signup2_teamchooseheading">
        Choose your team <span>(Max 4)</span>
      </h5>
      {inputList.map((item, i) => {
        return (
          <div key={i} className="signup2_box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="mr10 inputsignup2"
              value={item.username}
              onChange={(e) => handleChange(e, i)}
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="mr10 inputsignup2"
              value={item.password}
              onChange={(e) => handleChange(e, i)}
            />
            {inputList.length !== 1 && (
              <button
                className="mr10 minus_button"
                onClick={() => handleRemoveInput(i)}
              >
                <i class="fas fa-minus"></i>
              </button>
            )}
            {inputList.length - 1 === i && (
              <button className="add_button" onClick={handleAddInput}>
                <i class="fas fa-plus"></i>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Signup2;
