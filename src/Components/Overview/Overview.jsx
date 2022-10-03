import React, { useState, useEffect } from "react";
import Repos from "../Repos/Repos";
import "./overview.css";

const Overview = () => {
  // const [repo, setRepo] = useState([]);

  // const repoData = async () => {
  //   const response = await fetch(
  //     `https://api.github.com/users/mukhriddin-dev/repos`
  //   );
  //   const request = await response.json();
  //   setRepo(request);
  // };
  // console.log(repo);

  // useEffect(() => {
  //   repoData();
  // }, []);

  return (
    <>
      <div className="repository">
        <p className="overview-text text-light">Popular repositories</p>
      </div>
    </>
  );
};

export default Overview;
