import React, { useState } from "react";

function CreateArea(props) {
  const [titleText, setTitleText] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setTitleText((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={titleText.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={titleText.content}
        />
        <button
          type="button"
          onClick={() => {
            props.addItem(titleText);
            setTitleText(() => ({ title: "", content: "" }));
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
