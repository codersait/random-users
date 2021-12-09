import User from "./User";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Users.css";
import { UserProfile } from "../utils/UserProfile";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://randomuser.me/api/?results=20");
      const data = response.data.results;
      const Users = data.map((user) => {
        return new UserProfile(
          user.login.uuid,
          user.name.first,
          user.dob.age,
          user.gender,
          user.email,
          user.picture.large
        );
      });
      setUsers(Users);
    })();
  }, []);

  return (
    <div className="Users">
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name}
          age={user.age}
          gender={user.gender}
          email={user.email}
          imgUrl={user.imgUrl}
        />
      ))}
    </div>
  );
};

export default Users;
