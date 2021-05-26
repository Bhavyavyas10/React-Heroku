import React from "react";
import { tweets } from "./data";

export const Tweets = () => {
  return (
    <>
      <div>
        {tweets.map((data, key) => {
          return (
            <div key={key}>
              <Tweet
                key={key}
                maintweet={data.title}
                comment={data.comments.map((item) => (
                  <div>
                    <div>{item.comment.tweet}</div>
                    {item.hasOwnProperty("replies") ? (
                      <div
                        style={{ marginLeft: "30px", background: "#C0C0C0" }}
                      >
                        {item.replies.map((e) => (
                          <div>{e.text}</div>
                        ))}
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <div>{console.log(item.hasOwnProperty("replies"))}</div>
                  </div>
                ))}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const Tweet = ({ maintweet, comment }) => {
  return (
    <div
      style={{
        background: "#D3D3D3",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <div style={{ marginLeft: "45px" }}>
        <h1>Tweet</h1>
        <h4>{maintweet}</h4>
      </div>
      <div
        style={{
          marginLeft: "85px",
        }}
      >
        <h1>Comments</h1>
        <div style={{ background: "#909090" }}>
          <h6>{comment}</h6>
        </div>
      </div>
    </div>
  );
};
