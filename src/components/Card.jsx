import React from "react";

import Avatar from "./Avatar";
import Detail from "./Detail";

const Card = function (props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.details.name}</h2>
        <Avatar img={props.details.imgURL} />
      </div>
      <div className="bottom">
        <Detail detail={props.details.email} />
        <Detail detail={props.details.phone} />
      </div>
    </div>
  );
};

export default Card;

// <p>{props.key}</p>  ---> this does not work
