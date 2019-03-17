import React from "react";

//Styles import
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import "../../App.css";

const Header = () => {
  return (
    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1>Boendekostnad.nu</h1>
        <h3>
          <em>Den ultimata boendekostnadskalkylatorn på nätet!</em>
        </h3>
        <br />
        <a className="btn btn-primary btn-xl" href="/">
          Börja Räkna!
        </a>
      </div>
    </header>
  );
};

export default Header;
