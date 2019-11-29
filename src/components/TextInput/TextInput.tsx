import React, { FormEvent, useState } from "react";

import { ITextInputProps } from "./TextInput.types";

const TextInput: React.FC<ITextInputProps> = ({ addTask }) => {
  const [text, setText] = useState<string>("");

  const handleTextChange = (e: FormEvent<HTMLInputElement>): void => {
    setText(e.currentTarget.value);
  };

  const handleButtonClick = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (text) {
      addTask({
        isDone: false,
        text,
      });
    }
    setText("");
  };

  return (
    <React.Fragment>
      <form>
        <input
          className="form-container__text-input"
          type="text"
          name="taskContent"
          placeholder="Enter something here.."
          value={text}
          onChange={handleTextChange}
        />
        <button type="submit" className={"form-container__button"} onClick={handleButtonClick}>
          +
        </button>
      </form>
    </React.Fragment>
  );
};

export default TextInput;
