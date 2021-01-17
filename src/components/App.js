import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addToData(inputData) {
    setNotes((prevValue) => {
      return [...prevValue, inputData];
    });
  }
  function deleteData(id) {
    setNotes((prevValue) => {
      return prevValue.filter((item, index) => index !== id);
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addItem={addToData} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            handleClick={deleteData}
            title={item.title}
            content={item.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
