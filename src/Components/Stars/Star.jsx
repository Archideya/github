import React from "react";
import { FiSearch } from "react-icons/fi";
import "./stars.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";

const Star = () => {
  return (
    <>
      <div className="stars">
        <div className="container">
          <p className="star-text">Stars</p>
          <div className="d-flex justify-content-between">
            <form className="d-flex">
              <FiSearch className="icon-search" />
              <input
                className="form-control  find-input search"
                type="text"
                placeholder="Search"
              />
            </form>
            <div className="d-flex right">
              <div className="btn2 d-flex type-btn3 justify-content-between">
                <p>Type: All</p>
                <IoMdArrowDropdown />
              </div>
              <div className="btn2 d-flex btn3 justify-content-between">
                <p>Sort by: Recently starred</p>
                <IoMdArrowDropdown className="ic" />
              </div>
            </div>
          </div>
          <div className="text-center star-body">
            <AiOutlineStar className="star-icon" />
            <h4 className="text-light ">
              doesn’t have any starred repositories yet.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Star;
