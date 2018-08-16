import React, { Component } from 'react';
import Card from 'components/Build/Card';
import Button from 'components/Common/Button';
import { Link } from 'react-router-dom';

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
                                this.props.list.map((item) => {
                                    return <Card key={item.url} title={item.name} click={() => this.props.click(item.url)}/>
                                }) : null
                            }
                            <div className="spacer"></div>
                        </div>
                    </div>
                </div>
                <div className="btn-holder">
                    <div>
                        <Link to={this.props.previousLocation}>
                            <Button
                                className="btn-secondary"
                                instruction="Previous Step"
                                disabled={false}
                            />
                        </Link>
                        <Link to={this.props.location}>
                            <Button
                                className="btn-primary"
                                instruction="Next Step"
                                disabled={this.props.disabled}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildRight;