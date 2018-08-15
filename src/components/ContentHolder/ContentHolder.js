import React from 'react';
// import the sequence holder components
import Navbar from 'components/Common/Navbar';
import BuildHolder from 'components/BuildHolder/BuildHolder';
import { BrowserRouter } from 'react-router-dom';

import './ContentHolder.css';

const ContentHolder = () => (
    <div className="content-holder">
    <BrowserRouter>
        <div>
            <Navbar />
            <BuildHolder/>
        </div>
    </BrowserRouter>
    </div>
)

export default ContentHolder;