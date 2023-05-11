import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Mainpage from "./components/Mainpage";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import PrivateTweets from "./components/PrivateTweets";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Mainpage isSignedUp={isSignedUp} />
        </Route>
        <Route exact path="/signup">
          <Signup setIsSignedUp={setIsSignedUp} />
        </Route>
        <Route exact path="/login">
          <Login setIsSignedUp={setIsSignedUp} />
        </Route>
        <PrivateRoute exact path="/tweets" component={PrivateTweets} />
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
