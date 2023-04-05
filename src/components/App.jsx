import react, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateNote from "./createNote";
function App() {
  const [notes, setnotes] = useState([]);
  /*  function addNote(newNote) {
    setnotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }    */
  /* function addNote(newNote) {
    setnotes(notes.concat(newNote));
  }  */
  /* const addNote = (newNote) => {
    setnotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };   */
  const addNote = (newNote) => {
    setnotes(notes.concat(newNote));
  };
  /* function deleteNote(id) {
    setnotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }    */
  /*  function deleteNote(id) {
    setnotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    );
  }   */
  /*  function deleteNote(id) {
    setnotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => index !== id)
    );
  }   */
  /* const deleteNote = (id) => {
    setnotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };   */
  /* const deleteNote = (id) => {
    setnotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    );
  };   */
  const deleteNote = (id) => {
    setnotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => index !== id)
    );
  };
  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
