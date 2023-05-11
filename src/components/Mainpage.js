import Tweets from "./Tweets";
import Footer from "./Footer";
import PrivateTweets from "./PrivateTweets";
function Mainpage({ isSignedUp }) {
  return (
    <div className="mainpageContainer">
      {!isSignedUp ? <Tweets /> : <PrivateTweets />}
      {!isSignedUp ? <Footer /> : ""}
    </div>
  );
}

export default Mainpage;
