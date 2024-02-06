"use client";
import React from "react";

const Form = () => {
  const [inc, setIncrement] = React.useState(0);
  const increment = () => {
    console.log("increment");
    setIncrement(inc + 1);
  };
  console.log(inc);
  const [form, setForm] = React.useState([]);
  const handleInputChange = (index, value) => {
    const updatedForm = [...form];
    updatedForm[index] = { value };
    setForm(updatedForm);
  };

  const handleSelectValue = (index, e) => {
    const updatedForm = [...form];
    updatedForm[index] = { type: e.target.value };
    setForm(updatedForm);
  };
  console.log(form);
  return (
    <div>
      <button onClick={increment}>add +</button>
      <div>
        <form>
          {Array.from({ length: inc }).map((i, index) => (
            <div key={index}>
              <input
                className="border block my-2"
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
              <select onChange={(e) => handleSelectValue(index, e)}>
                <option value="string">string</option>
                <option value="object">object</option>
              </select>
              {form[index] && form[index].type === "object" && (
                <input
                  className="border block my-2"
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              )}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Form;
