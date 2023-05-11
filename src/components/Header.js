import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Header({ isSignedUp, setIsSignedUp }) {
  const history = useHistory();

  const handleLogout = (e) => {
    console.log("logout butonuna basıldı");
    localStorage.removeItem("token");
    setIsSignedUp(false);
    history.push("/");
  };

  return (
    <div className="header">
      <img
        className="logo"
        src="https://static.vecteezy.com/system/resources/previews/001/195/458/original/speech-bubble-png.png"
      />
      <h1 className="heading"> FreeSpeech.</h1>
      {isSignedUp ? (
        <div className="buttons">
          <Link to="/profile">
            <button>Profile</button>
          </Link>

          <button onClick={handleLogout}>Logout</button>

          <Link to="/">
            <button>Main Page</button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
