import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const StreamHeader = () => {

    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamer
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
                </Link>
                <GoogleAuth/>
            </div>
        </div>
    );
};

export default StreamHeader;
