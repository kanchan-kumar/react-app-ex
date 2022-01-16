import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import VideoApp from "./components/VideoApp";
import AccordionApp from "./components/AccordinApp";
import ReduxApp from "./components/ReduxApp";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import reducers from './reducers';
import ReduxThunkApp from "./components/ReduxThunkApp";
import {ReduxThunkReducers} from "./reducers/ReduxThunkReducers";
import thunk from "redux-thunk";
import StreamingApp from "./components/StreamingApp";
import StreamReducers from "./reducers/StreamReducers";


if (module.hot) {
    module.hot.accept();
}

//ReactDOM.render(<App/>, document.querySelector("#root"));
//ReactDOM.render(<VideoApp/>, document.querySelector("#root"));
//ReactDOM.render(<AccordionApp/>, document.querySelector("#root"));

//React with Redux
/*ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <ReduxApp/>
    </Provider>,
    document.querySelector("#root"));*/

//React with Redux-thunk middleware
/*const store = createStore(ReduxThunkReducers, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <ReduxThunkApp/>
    </Provider>,
    document.querySelector("#root"));*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(StreamReducers,
    composeEnhancers(applyMiddleware(thunk)));

//Streaming APP
ReactDOM.render(
    <Provider store={store}>
    <StreamingApp/>
    </Provider>,
    document.querySelector("#root"));


