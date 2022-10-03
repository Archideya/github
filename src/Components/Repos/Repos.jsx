import React, { useState, useEffect } from "react";
import "./repos.css";
import { NavLink } from "react-router-dom";

const Repos = ({ item }) => {
  // const [lang, setLang] = useState([]);

  // const langData= async ()=>{
  //   const response = await fetch(`https://api.github.com/repos/mukhriddin-dev/5groupTeam/languages`)
  //   const request = await response.json()
  //   setLang(request)
  // }

  // useEffect(()=>{
  //   langData()
  // },[lang])

  return (
    <>
      <div className="repos ">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            {" "}
            <div className="d-flex">
              <NavLink
                to={`/profile/repository/${item.name}`}
                className="repo-name"
              >
                <p>{item.name}</p>
              </NavLink>
              <p className="public">Public</p>
            </div>
            <p className="repo-fullname">{item.full_name}</p>
            <div className="d-flex">
              <div className="circle"></div>
              <div className="lang">{item.language}</div>
              <p className="repo-fullname update">
                Updated on {item.updated_at}
              </p>
            </div>
          </div>
          <div className="line3"></div>
        </div>
      </div>
    </>
  );
};

export default Repos;
