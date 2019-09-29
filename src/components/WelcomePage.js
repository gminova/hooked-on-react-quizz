import React, { useState, useEffect } from "react";

const WelcomePage = () => {
  const [username, setUsername] = useState("guest");

  const updateUsername = event => setUsername(event.target.value);
  useEffect(() => {}, [username]);
  return (
    <>
      <label htmlFor="username">
        <input
          id="username"
          className="input-username"
          onChange={updateUsername}
        />
        <p className="display-username">You're playing as: {username}</p>
      </label>
    </>
  );
};

export default WelcomePage;
