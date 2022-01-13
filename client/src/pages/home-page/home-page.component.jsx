import React from "react";
import axios from "axios";

const HomePage = () => {
  const getUsers = async () => {
    const fetchedUsers = await axios({
      method: "get",
      url: "/fetch/users",
    });

    console.log(fetchedUsers.data);
  };

  const logOut = async () => {
    const result = await axios({
      method: "post",
      url: "/users/logout",
    });

    console.log(result);
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default HomePage;
