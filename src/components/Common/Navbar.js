import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <div className="Navbar">
                <div className="nav-contents">
                    <img src="http://via.placeholder.com/350x100" className="logo" />
                    <button className="btn btn-primary" type="submit">Build Character</button>
                </div>
                <div className="nav-shadow"></div>
            </div>
        )
    }
}

export default Navbar;