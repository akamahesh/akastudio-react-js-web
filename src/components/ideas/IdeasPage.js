import React from "react";
import Idea from './Idea'
import data from '../../data';

class IdeasPage extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <h4>Projects we are working upon..</h4>
                {
                    data.map((element) => <Idea data={element} key={element.id} />)
                }
            </div>
        );
    }
}

export default IdeasPage;
