import React from "react";
import { useState, useEffect } from "react";
import { axiosWithAuth } from "./AxiosAuth";
import { useHistory } from "react-router-dom";
export default function PrivateTweets() {
  const [tweets, setTweets] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axiosWithAuth()
      .get("https://wit-courses-api2.onrender.com/entries")
      .then((response) => {
        if (response.status === 200) {
          setTweets(response.data);
          history.push("/tweets");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <div className="max-w-xl mx-auto border border-slate-300 bg-[#e0e0e0] mt-6  p-4 shadow-xl rounded-xl">
            <div className="flex gap-2 items-center">
              <img src={tweet.img_ur} alt="" className="w-14 rounded-full" />
              <div className="flex-1">
                <h1 className="font-bold text-lg leading-none">
                  {tweet.owner_name}
                </h1>
                <h2 className="text-slate-600 leading-none">
                  {tweet.owner_name}
                </h2>
              </div>
              <button>...</button>
            </div>
            <p className="leading-tight py-3">{tweet.body}</p>
            <p className="text-slate-600">{tweet.created_at}</p>
            <div className="flex gap-2 items-center text-slate-600 border-t">
              <div>
                <span className="font-bold"></span> Retweets
              </div>
              <div>
                <span className="font-bold"></span> Likes
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
