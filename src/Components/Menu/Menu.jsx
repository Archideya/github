import React from "react";
import "./menu.css";
import { BiBookOpen, BiCube } from "react-icons/bi";
import { RiGitRepositoryLine } from "react-icons/ri";
import { BsColumns } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Menu = ({ person }) => {
  return (
    <>
      <div className="menu">
        <div className="container ">
          <ul className="menu-sec d-flex align-items-center justify-content-between">
            <NavLink
              to="/profile/overview"
              className={({ isActive }) =>
                isActive ? "menu-item d-flex activated" : "d-flex menu-item"
              }
            >
              <BiBookOpen className="icon3" />
              <p className="menu-text">Overview</p>
            </NavLink>
            <NavLink
              to="/profile/repository"
              className={({ isActive }) =>
                isActive ? "menu-item d-flex activated" : "d-flex menu-item"
              }
            >
              <RiGitRepositoryLine className="icon3" />
              <p className="menu-text">Repositories</p>
              <p className="number">{person.public_repos}</p>
            </NavLink>
            <NavLink
              to="/profile/projects"
              className={({ isActive }) =>
                isActive ? "menu-item d-flex activated" : "d-flex menu-item"
              }
            >
              <BsColumns className="icon3" />
              <p className="menu-text">Projects</p>
              <p className="number">12</p>
            </NavLink>

            <NavLink
              to="/profile/package"
              className={({ isActive }) =>
                isActive ? "menu-item d-flex activated" : "d-flex menu-item"
              }
            >
              {" "}
              <BiCube className="icon3" />
              <p className="menu-text">Packages</p>
            </NavLink>
            <NavLink
              to="/profile/stars"
              className={({ isActive }) =>
                isActive ? "menu-item d-flex activated" : "d-flex menu-item"
              }
            >
              <AiOutlineStar className="icon3" />
              <p className="menu-text">Stars</p>
              <p className="number">155</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
