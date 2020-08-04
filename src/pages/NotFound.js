import React from "react";

import "./styles/NotFound.css";

import eventLogo from "../images/platziconf-logo.svg";
import error404Logo from "../images/404.svg";

function NotFound() {
    return (
        <>
            <div className="not-found-container">
                <div className="not-found-container__col offset-1 col-6">
                    <img
                        className="img-fluid not-found-container__col--img"
                        src={error404Logo}
                        alt="Logo de error 404" />
                </div>
                <div className="not-found-container__col col-4">
                    <img
                        className="img-fluid"
                        src={eventLogo}
                        alt="Logo del evento" />
                    <h1 className="not-found-container__col--text">Algo ha salido mal...</h1>
                </div>
            </div>
        </>
    );
}

export default NotFound;