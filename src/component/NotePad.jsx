import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserInput, editUserInput, removeUserInput } from "../Redux/InputStrSlice";

const NotePad = () => {
  const dispatch = useDispatch();
  const inputStr = useSelector((state) => state.stringput.inputStr);
  const [str, setStr] = useState("");
  const [editingNote, setEditingNote] = useState(null);

  const handleAddNote = () => {
    if (str.trim()) {
      dispatch(addUserInput(str));
      setStr(""); 
    }
  };

  const handleDeleteNote = (note) => {
    dispatch(removeUserInput(note));
  };

  const handleEditNote = (note) => {
    setEditingNote(note); 
    setStr(note); 
  };

  const handleUpdateNote = () => {
    if (editingNote && str.trim()) {
      dispatch(editUserInput({ oldNote: editingNote, newNote: str }));
      setStr(""); 
      setEditingNote(null);
    }
  };

  return (
    <div className="notepad-container">
      <h1>Note Pad</h1>
      <textarea
        className="note-input"
        placeholder="Write your note here..."
        value={str}
        onChange={(e) => setStr(e.target.value)}
      />
      {editingNote ? (
        <button className="update-note-button" onClick={handleUpdateNote}>
          Update Note
        </button>
      ) : (
        <button className="add-note-button" onClick={handleAddNote}>
          Add Note
        </button>
      )}

      <ul className="notes-list">
        {inputStr.map((note, index) => (
          <li key={index} className="note-item">
            <span>{note}</span>
            <button
              className="edit-button"
              onClick={() => handleEditNote(note)}
            >
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => handleDeleteNote(note)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NotePad;
