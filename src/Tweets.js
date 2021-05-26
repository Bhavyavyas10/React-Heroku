import React from "react";
import { tweets } from "./data";

const color1 = "#007991";
const color2 = "#78ffd6";

const color3 = "#4568DC";
const color4 = "#B06AB3";

const color5 = "#43C6AC";
const color6 = "#191654";

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
                    <div
                      style={{
                        height: "40px",
                        background: `linear-gradient(to right,  ${color3},${color4})`,
                        borderRadius: "10px",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "20px",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ color: "#4AC29A", fontSize: "16px" }}>
                        {item.comment.tweet}
                      </p>

                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                        />
                        <label for="male">ABC</label>
                        <br />
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                        />
                        <label for="female">ABC</label>
                        <br></br>
                      </div>
                    </div>
                    {item.hasOwnProperty("replies") ? (
                      <div
                        style={{
                          marginLeft: "30px",
                          background: `linear-gradient(to right,  ${color5},${color6})`,
                          marginBottom: "10px",
                          borderRadius: "10px",
                        }}
                      >
                        {item.replies.map((e) => (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              paddingLeft: "20px",
                              justifyContent: "space-between",
                            }}
                          >
                            {e.text}
                            <div
                              style={{ display: "flex", flexDirection: "row" }}
                            >
                              <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                              />
                              <label for="male">ABC</label>

                              <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                              />
                              <label for="female">ABC</label>
                              <br></br>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div></div>
                    )}
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
        background: `linear-gradient(to right,  ${color1},${color2})`,
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <div style={{ marginLeft: "45px" }}>
        <h1 style={{ color: "#4AC29A" }}>Tweet</h1>
        <h4 style={{ color: "#021B79", fontSize: "20px" }}>{maintweet}</h4>
      </div>
      <div
        style={{
          marginLeft: "85px",
        }}
      >
        <h1 style={{ color: "#4AC29A" }}>Comments</h1>
        <div style={{}}>
          <h6>{comment}</h6>
        </div>
      </div>
    </div>
  );
};
