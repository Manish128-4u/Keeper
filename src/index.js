import react from "react";
import reactDOM from "react-dom";
import Header from "./Header";
import Note from "./note";
import Footer from "./footer";
import notes from "./notes";

function createNote(notes) {
  return (
    <Note key={notes.key} title={notes.title} content={notes.content}></Note>
  );
}

reactDOM.render(
  <div>
    <Header />
    {notes.map(createNote)}
    <Footer />
  </div>,

  document.getElementById("root")
);
