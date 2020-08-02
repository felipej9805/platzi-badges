import React from "react";

import "../styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia"></img>
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://s.gravatar.com/avatar/eef6e63767be8cd49add27c035589294?s=80"
            alt="Avatar"
          ></img>
          <h1>
            Felipe
            <br />
            Jurado
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Ingeniero</h3>
          <div>@felipej9805</div>
        </div>

        <div className="Badge__footer">#Platzi</div>
      </div>
    );
  }
}

export default Badge;
