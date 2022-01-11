import React from "react";
import axios from "axios";

const HomePage = () => {
  const getUsers = async () => {
    const fetchedUsers = await axios({
      method: "get",
      url: "/users",
    });

    console.log(fetchedUsers.data);
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
    </div>
  );
};

export default HomePage;
