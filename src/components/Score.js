import React from "react";

const Score = ({ setPage, username, score }) => {
  return (
    <div>
      <h1>Well done, {username.slice(0,1).toUpperCase().concat(username.slice(1))}, your score is: {score}</h1>
      <button onClick={() => setPage("WelcomePage")}>Play again!</button>
    </div>
  );
};

export default Score;
