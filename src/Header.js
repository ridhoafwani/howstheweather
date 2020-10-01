import React, { useState, useEffect } from "react";
import {Route, Link } from "react-router-dom";
import "./Header.css";
import Hallo from "./Hallo";

const Header = () => {
    const ready = true;
    if (ready) {
        return (
        <div>
            <div className="Header">
            <div className="page-name">
                <Link to="/">
                How's The <strong> Weather</strong>
                </Link>
            </div>
            <div className="search-form">
                <form>
                <button>
                    <i className="fas fa-search search-icon" />
                </button>
                <input
                    className="text-input"
                    type="text"
                    placeholder="Search for a city"
                    autoComplete="off"
                    spellCheck="false"
                />
                </form>
            </div>
            </div>
            <Route path="/" exact component={Hallo} />
        </div>
       
        )
    }
            
};

export default Header;