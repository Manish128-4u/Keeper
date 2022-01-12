import react from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

ReactDOM.render(
  <div>
    <Header />
    <Note />
    <Footer />
  </div>,

  document.getElementById("root")
);
