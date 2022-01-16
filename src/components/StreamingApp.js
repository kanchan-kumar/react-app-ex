import React from 'react';
import {BrowserRouter, HashRouter, MemoryRouter, Route, Router, Switch} from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamHeader from "./StreamHeader";
import history from "../history";

const StreamingApp = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <StreamHeader/>
                    <Switch>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/streams/new" exact component={StreamCreate}/>
                        <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                        <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                        <Route path="/streams/:id" exact component={StreamShow}/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default StreamingApp;

