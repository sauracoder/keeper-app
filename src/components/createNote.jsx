import react, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateNote(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setnote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    /*   setnote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });     */
    setnote({
      ...note,
      [name]: value
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setnote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  /* function expand() {
    setExpanded(true);
  }  */
  const expand = () => {
    setExpanded(true);
  };
 /* function btoNormal() {
    setExpanded(false);
  }    */
  const btoNormal = () => {
    setExpanded(false);
  };
  return (
    <div onDoubleClick={btoNormal}>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
export default CreateNote;
