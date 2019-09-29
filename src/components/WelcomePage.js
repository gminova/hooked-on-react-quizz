import React, { useState, useEffect } from "react";

const WelcomePage = ({ setPage, score, setScore, username, setUsername }) => {
  useEffect(() => {
    setScore(0);
  }, []);
  const updateUsername = event => setUsername(event.target.value);
  //   useEffect(() => {}, [username]);
  return (
    <>
      <label htmlFor="username">
        <input
          id="username"
          className="input-username"
          onChange={updateUsername}
        />
        <p className="display-username">You're playing as: {username.slice(0,1).toUpperCase().concat(username.slice(1))}</p>
        <button className="button--start" onClick={() => setPage("Quiz")}>
          Let's start!
        </button>
      </label>
    </>
  );
};

export default WelcomePage;
