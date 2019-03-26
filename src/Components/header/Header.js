import React from "react";
import { Jumbotron } from "react-bootstrap";

//Styles import
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid className="text-center jumbo">
          <h1>Boendekostnad.nu</h1>
          <h3 style={{ color: "white" }}>
            <em>Den ultimata boendekostnadskalkylatorn på nätet!</em>
          </h3>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
