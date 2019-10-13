import React from "react";

const WelcomePage = ({ setPage, score, setScore, username, setUsername }) => {
const updateUsername = event => setUsername(event.target.value);

  return (
    <>
      <label htmlFor="username">
        <p className="display-username">You're playing as: {username.slice(0,1).toUpperCase().concat(username.slice(1))}</p>
        <input
          id="username"
          className="input-username"
          onChange={updateUsername}
        />
        <button className="button--start" onClick={() => setPage("Quiz")}>
          Let's start!
        </button>
      </label>
    </>
  );
};

export default WelcomePage;
