import React, { Component } from 'react';

import { Stage1, Stage2 } from 'components/Stages';

class BuildHolder extends Component {
    render() {
        return (
            <div>
                <Stage1 />
                {/* <Stage2 /> */}
            </div>
        )
    }
}

export default BuildHolder;