import React, { useState, useEffect } from "react";

const WelcomePage = ({ setPage }) => {
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
        <button className="button--start" onClick={() => setPage("Quiz")}>
          Let's start!
        </button>
      </label>
    </>
  );
};

export default WelcomePage;