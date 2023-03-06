import React, { useState } from "react";
import "./InputForm.css";

export default function InputForm() {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`${input}`);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <div className="InputForm row">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your To Do..."
          className="col-8 input"
          onChange={handleInput}
        />
      </form>
    </div>
  );
}
