import React from 'react';
// import the sequence holder components
import BuildHolder from 'components/BuildHolder/BuildHolder';
import { BrowserRouter } from 'react-router-dom';

import './ContentHolder.css';

const ContentHolder = () => (
    <div className="content-holder">
    <BrowserRouter>
        <BuildHolder/>
    </BrowserRouter>
    </div>
)

export default ContentHolder;