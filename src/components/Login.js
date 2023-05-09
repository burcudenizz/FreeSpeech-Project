import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // login işlemleri burada yapılacak
  }

  return (
    <div>
      <h1>FreeSpeach</h1>
      <h3>Log In</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Passowrd:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}

export default Login;
