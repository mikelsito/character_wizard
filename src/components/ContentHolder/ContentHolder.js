import React from 'react';
// import the sequence holder components
import BuildHolder from 'components/BuildHolder/BuildHolder';

import './ContentHolder.css';

const ContentHolder = () => (
    <div className="content-holder">
    {/* First sequence holder */}
    <BuildHolder/>
    </div>
)

export default ContentHolder;