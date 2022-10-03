import React, { useState, useEffect } from "react";
import "./repository.css";
import Repos from "../Repos/Repos";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Repository = () => {
  const [repo, setRepo] = useState([]);

  const repoData = async () => {
    const response = await fetch(
      `https://api.github.com/users/mukhriddin-dev/repos`
    );
    const request = await response.json();
    setRepo(request);
  };
  console.log(repo);

  useEffect(() => {
    repoData();
  }, []);

  return (
    <>
      <div className="repositories container">
        <div className="repositories-top container d-flex justify-content-between">
          <form>
            <input
              className="form-control find-input"
              type="text"
              placeholder="Find repository..."
            />
          </form>
          <div className="d-flex btns justify-content-between">
            <div className="d-flex  btn2">
              <p className="type text-light">Type</p>
              <MdOutlineArrowDropDown className="type-icon text-light fs-3" />
            </div>
            <div className="d-flex  btn2">
              <p className="type text-light">Language</p>
              <MdOutlineArrowDropDown className="type-icon text-light fs-3" />
            </div>
            <div className="d-flex btn2">
              <p className="type text-light">Sort</p>
              <MdOutlineArrowDropDown className="type-icon text-light fs-3" />
            </div>
          </div>
        </div>
        <div className="container">
          {repo.map((item, index) => {
            return <Repos key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Repository;
