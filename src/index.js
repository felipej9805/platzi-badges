// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/Global.css'


import Badge from "./components/Badge";


const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge
    firstName="Felipe"
    lastName="Jurado"
    avatarUrl="https://s.gravatar.com/avatar/eef6e63767be8cd49add27c035589294?s=80"
    jobTitle="Site Reliability Engineer"
    twitter="felipej9805" />, container);
