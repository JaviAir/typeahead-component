import React, { useState, useRef, useEffect } from "react";

function MyInput({ list, classname }) {
  let [text, setText] = useState("");
  let [dropDown, setDropDown] = useState([]);
  const inputRef = useRef(null);

  function handleTextChange(e) {
    setText(e.currentTarget.value);
    let inputValue = e.currentTarget.value.trim().toLowerCase();
    if (inputValue !== "") {
      setDropDown(
        list.filter((element) => {
          return element.toLowerCase().startsWith(inputValue);
        })
      );
    } else {
      setDropDown([]);
    }
  }

  function listItem_onClick(name) {
    setText(name);
    setDropDown([]);
  }

  function listItem_keyPress(e, name) {
    if (e.key === "Enter") {
      listItem_onClick(name);
      if (inputRef !== null) {
        inputRef.current.focus();
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setDropDown([]);
    });
    document.addEventListener("mouseup", (e) => {
      if (e.target.name !== "Joe" && e.target.id !== "ItemName") {
        setDropDown([]);
      }
    });
    return () => {
      document.removeEventListener("keydown", (e) => e);
      document.removeEventListener("mouseup", (e) => e);
    };
  }, []);

  return (
    <div>
      <input
        name="Joe"
        type="text"
        onChange={handleTextChange}
        value={text}
        ref={inputRef}
      />
      {dropDown.map((name, index) => {
        let substr = name.substring(0, text.length);
        let name2 = name.substring(substr.length);
        return (
          <div
            id="ItemName"
            key={index}
            tabIndex="0"
            className={classname}
            onClick={() => {
              listItem_onClick(name);
            }}
            onKeyPress={(e) => {
              listItem_keyPress(e, name);
            }}
          >
            <span style={{ fontWeight: "bold" }}>{substr}</span>
            {name2}
          </div>
        );
      })}
    </div>
  );
}

export default MyInput;
