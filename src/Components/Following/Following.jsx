import React, { useState, useEffect } from "react";
import { MdMapsHomeWork, MdLocationOn } from "react-icons/md";

const Following = ({ user }) => {
  const [following, setFollowing] = useState([]);

  const dataFollowing = async () => {
    const response = await fetch(`${user.url}`);
    const request = await response.json();
    setFollowing(request);
  };
  console.log(following);

  useEffect(() => {
    dataFollowing();
  }, []);

  return (
    <>
      <div className="followers">
        <div className="container">
          <div className="followers-card d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <img className="follow-img" src={following.avatar_url} alt="" />
              <div className="follow-card-body">
                <div className="d-flex align-items-center ">
                  <p className="follower-name">{following.name}</p>
                  <p className="login-name">{following.login}</p>
                </div>
                <p className="bio-text">{following.bio}</p>
                <div className="d-flex">
                  <div className="d-flex">
                    <MdMapsHomeWork className="fs-4" />
                    <p className="login-name">{following.company}</p>
                  </div>
                  <div className="d-flex">
                    <MdLocationOn className="fs-4" />
                    <p className="login-name">{following.location}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn follow-btn">Follow</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Following;
