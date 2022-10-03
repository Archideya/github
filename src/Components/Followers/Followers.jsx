import React, { useState, useEffect } from "react";
import "./follow.css";

const Followers = ({ fol }) => {
  const [folUser, setFolUser] = useState([]);

  const dataFollowers = async () => {
    const response = await fetch(`${fol.url}`);
    const request = await response.json();
    setFolUser(request);
  };
  console.log(folUser);

  useEffect(() => {
    dataFollowers();
  }, []);

  return (
    <>
      <div className="followers">
        <div className="container">
          <div className="followers-card d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <img className="follow-img" src={folUser.avatar_url} alt="" />
              <div className="follow-card-body">
                <div className="d-flex align-items-center ">
                  <p className="follower-name">{folUser.name}</p>
                  <p className="login-name">{folUser.login}</p>
                </div>
                <p className="bio-text">{folUser.bio}</p>
              </div>
            </div>
            <div className="btn follow-btn">Follow</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Followers;
