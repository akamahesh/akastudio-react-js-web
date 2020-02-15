import React from "react";

const Idea = (props) => (
    <div>
        <p>{props.data.name}</p>
        <p>{props.data.description}</p>
        <img src={props.data.image} width="100" height="100" />
    </div>
);

export default Idea;
