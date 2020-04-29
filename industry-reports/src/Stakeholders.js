import React, { Component } from 'react'
import './Stakeholders.css';

export class Stakeholders extends Component {
    render() {
        return (
            <div className='stakeholders-container'>
                <div className ='stakeholders-child-1'>
                    <div>Graphic 1</div>
                    <div>Graphic 2</div>
                    <div>Graphic 3</div>
                </div>
                <div className ='stakeholders-child-2'>
                    <h1>STAKEHOLDER OVERVIEW</h1>
                    <p1>Recently, stakeholders have initiated a number of activities at the intersection of AI and human rights. This section provides a snapshot of the current landscape for business, government, intergovernmental organizations, civil society, and academia. The discussion will focus on
AI and human rights activity in business, with short examples of activities by civil society, governments, the UN, intergovernmental organizations, and academia.</p1>
                </div>

            </div>
        )
    }
}

export default Stakeholders;
