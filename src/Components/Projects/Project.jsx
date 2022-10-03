import React from "react";
import "./project.css";
import { FiSearch } from "react-icons/fi";
import { BsWindowSidebar } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Projetct = () => {
  return (
    <>
      <div className="projects">
        <div className="container">
          <div className="project-top">
            <p className="project-text repo-fullname">
              Learn more about projects
            </p>
            <form className="d-flex">
              <FiSearch className="search-icon" />
              <input
                className="form-control  find-input open-inp"
                type="text"
                placeholder="is:open"
              />
            </form>
          </div>
          <div className="project-end">
            <div className="project-end_top d-flex justify-content-between">
              <div className="d-flex pro-menu justify-content-between">
                <div className="d-flex open">
                  <BsWindowSidebar className="op-icon" />
                  <p className="open-text">0 Open</p>
                </div>
                <div className="d-flex close ">
                  <AiFillCalendar className="close-icon" />
                  <p className="close-text">0 Close</p>
                </div>
              </div>
              <div className="d-flex">
                <p className="sort">Sort</p>
                <MdOutlineArrowDropDown className="fs-2 sort-icon" />
              </div>
            </div>
            <div className="project-body text-center">
              <BsWindowSidebar className="op-icon body-icon" />
              <h3 className="text-light">No open projects</h3>
              <p className="close-text body-text">
                No projects have been opened yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projetct;
