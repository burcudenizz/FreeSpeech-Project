import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Mainpage from "./components/Mainpage";
import Signup from "./components/Signup";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Mainpage />
      <Signup />
      <Login />
      <Profile />
    </div>
  );
}

export default App;
