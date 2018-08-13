import React, { Component } from 'react';
import Card from 'components/Build/Card';

import './BuildRight.css';

class BuildRight extends Component {

    componentDidMount() {
    }
    
    render() {
        return (
            <div className="BuildRight">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            {
<<<<<<< HEAD
                                this.props.list ?
                                this.props.list.map((item, index) => {
                                    return <Card key={index + 1} title={item.name} />
=======
                                this.props.raceList ?
                                this.props.raceList.map((race, index) => {
                                    return <Card key={index + 1} race={race.name} />
>>>>>>> started button
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