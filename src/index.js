import React from "react";
import ReactDOM from "react-dom";
import { Button } from "reactstrap";
import Header from "./components/Header.js";
import Footer1 from "./components/Footer1.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <div id="content" style={{width:'100%',height:'70vh',verticleAlign:'middle', textAlign:'center'}} > work in progess!... </div>
      <Footer1 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
