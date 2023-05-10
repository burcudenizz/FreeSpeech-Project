import { useState, useEffect } from "react";

import { axiosWithAuth } from "./AxiosAuth";
const tweetData = [
  {
    body: "Our latest major version includes out-of-the-box improvements like automatic batching, new APIs like startTransition, and streaming server-side rendering with support for Suspense.",
    user: {
      name: "React",
      nick: "reactjs",
      avatar:
        "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
    },
    reactions: {
      rt: 28,
      like: 801,
    },
    created_at: "Fri Mar 24 2023 14:30:23 GMT+0300 (GMT+03:00)",
  },
  {
    body: "It's been another great month for Node.js security! Progress was made on: ✅ Permission model in Node.js 20 ✅ Automating dependencies ✅ Security ecosystem ✅ Feedback on is-my-node-vulnerable",
    user: {
      name: "Node.js",
      nick: "nodejs",
      avatar:
        "https://pbs.twimg.com/profile_images/1262824892535373825/BiXDFDDp_400x400.jpg",
    },
    reactions: {
      rt: 17,
      like: 301,
    },
    created_at: "Fri Mar 24 2023 14:30:23 GMT+0300 (GMT+03:00)",
  },
  {
    body: "Just curious, are you using => functions exclusively or still sticking to traditional function syntax? No judgement!",
    user: {
      name: "Javascript",
      nick: "js",
      avatar:
        "https://pbs.twimg.com/profile_images/1509903834151325697/1Ked07gR_400x400.jpg",
    },
    reactions: {
      rt: 17,
      like: 301,
    },
    created_at: "Fri Mar 24 2023 14:30:23 GMT+0300 (GMT+03:00)",
  },
];

function Tweets() {
  return (
    <div className="mb-[9rem] mt-[1rem]">
      {tweetData.map((tweet) => (
        <div key={tweet.id}>
          <div className="max-w-xl mx-auto border border-slate-300 bg-[#e0e0e0] mt-6 p-4 shadow-xl rounded-xl">
            <div className="flex gap-2 items-center">
              <img
                src={tweet.user.avatar}
                alt=""
                className="w-14 rounded-full"
              />
              <div className="flex-1">
                <h1 className="font-bold text-lg leading-none">
                  {tweet.user.name}
                </h1>
                <h2 className="text-slate-600 leading-none">
                  {tweet.user.nick}
                </h2>
              </div>
              <button>...</button>
            </div>
            <p className="leading-tight py-3">{tweet.body}</p>
            <p className="text-slate-600">{tweet.created_at}</p>
            <div className="flex gap-2 items-center text-slate-600 border-t">
              <div>
                <span className="font-bold">{tweet.reactions.rt}</span> Retweets
              </div>
              <div>
                <span className="font-bold">{tweet.reactions.like}</span> Likes
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tweets;
