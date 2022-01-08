import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import VideoApp from "./components/VideoApp";
import AccordionApp from "./components/AccordinApp";

if (module.hot) {
    module.hot.accept();
}

//ReactDOM.render(<App/>, document.querySelector("#root"));
ReactDOM.render(<VideoApp/>, document.querySelector("#root"));
//ReactDOM.render(<AccordionApp/>, document.querySelector("#root"));
