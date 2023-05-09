function Mainpage() {
  return (
    <div className="mainpageContainer">
      <div className="tweetContainer">
        <div className="tweets">tweets</div>
      </div>
      <div className="footerback">
        <div className="footer">
          <div className="footerCenter">
            <div className="footerContent">
              <button>Sign Up</button>
              <br />
              <div className="login">
                <h2>Do you already have an account? 👀</h2>
                <button>Log In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
