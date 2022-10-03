import React from "react";
import { useParams } from "react-router-dom";
import { TbGitFork } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import "./repo.css";

const Repo = () => {
  const { name } = useParams();
  return (
    <>
      <div className="repo">
        <div className="d-flex align-items-center justify-content-between">
          <div className="">
            <div className="d-flex align-items-center">
              <TbGitFork className="fork" />
              <p className="repo-name">name</p> <p className="slash">/</p>{" "}
              <p className="repo-name">{name}</p>
              <p className="public">Public</p>
            </div>
            <div className="d-flex">
              <p>forked from</p>{" "}
              <p className="name-repo">Lorem, ipsum dolor.</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="btn d-flex align-items-center btn-repo1">
              <IoIosNotifications />
              <p className="repo-btntext">Notifications</p>
            </div>
            <div className="btn d-flex align-items-center btn-repo middle">
              <TbGitFork />
              <p className="repo-btntext">Fork</p>
            </div>
            <div className="btn d-flex align-items-center btn-repo">
              <AiOutlineStar />
              <p className="repo-btntext">Star</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repo;
