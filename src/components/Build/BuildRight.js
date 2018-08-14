import React, { Component } from 'react';
import Card from 'components/Build/Card';

import './BuildRight.css';

class BuildRight extends Component {
    
    render() {
        return (
            <div className="BuildRight">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            {
                                this.props.list ?
                                this.props.list.map((item, index) => {
                                    return <Card key={index + 1} title={item.name} click={() => this.props.click(index+1)}/>
                                }) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildRight;