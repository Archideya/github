import React, { useState, useEffect } from "react";
import "./profile.css";
import { FiUsers } from "react-icons/fi";
import { MdHomeWork, MdLocationOn } from "react-icons/md";
import { FiLink } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Profile = ({ person }) => {
  return (
    <>
      <div className="profile">
        <div className="">
          <img
            width={300}
            height={300}
            className="profile-img"
            src={person.avatar_url}
            alt=""
          />
          <h3 className="name ">{person.name}</h3>
          <p className="username">{person.login}</p>
          <p className="btn">Follow</p>
          <p className="bio text-light">{person.bio}</p>
          <ul className="d-flex info">
            <Link
              className="d-flex text-light fol  info-list"
              to="/profile/followers"
            >
              <FiUsers className="users" />
              <p className="followers-num ">{person.followers}</p>
              <p className="followers fol">followers</p>
            </Link>

            <Link
              className="d-flex text-light follow fol info-list"
              to="/profile/following"
            >
              <p className="followers-num">{person.following}</p>
              <p className="followers fol">following</p>
            </Link>
          </ul>
          <ul className="info">
            <li className="text-light d-flex info-list">
              <MdHomeWork className="info-icon" />
              <p className="work">{person.company}</p>
            </li>
            <li className="d-flex text-light info-list">
              <MdLocationOn className="info-icon" />
              <p className="work">{person.location}</p>
            </li>
            <li className="d-flex text-light info-list">
              <FiLink className="info-icon" />
              <p className="link blog">{person.blog}</p>
            </li>
            <li className="d-flex text-light info-list">
              <BsTwitter className="info-icon" />
              <p className="link twit-user">{person.twitter_username}</p>
            </li>
            <p className="block">Block or Report</p>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
