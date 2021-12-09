import React from "react";
import "./User.css";

const User = ({name,age,gender,email,imgUrl}) => {
  return (
    <div className="User">
      <div className="img-container">
        <img src={imgUrl} alt=""/>
      </div>
      <div className="user-body">
          <p><strong>Name: </strong>{name} </p>
          <p><strong>Age: </strong>{age} </p>
          <p><strong>Gender: </strong>{gender} </p>
          <p><strong>Email: </strong>{email} </p>
      </div>
    </div>
  );
};

export default User;
