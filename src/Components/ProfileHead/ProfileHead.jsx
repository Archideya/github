import React from "react";
import "./profilehead.css";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../../Context/dataContext";
import { useContext } from "react";

const ProfileHead = () => {
  const back = useNavigate();

  const { name, setName } = useContext(dataContext);

  return (
    <>
      <header className="profile-head">
        <div className="d-flex align-items-center justify-content-between container">
          <div className="d-flex align-items-center justify-content-between profile-head_left">
            <i className="fab fa-github icon icon2"></i>
            <ul className="d-flex profile-head_list align-items-center justify-content-between">
              <li className="product">
                <div className="d-flex align-items-center">
                  {" "}
                  <a className="head-link" href="#">
                    Product
                  </a>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="product_list">
                  <ul>
                    <li className="product_item">
                      <a className=" pro-active" href="#">
                        Features
                      </a>
                    </li>
                    <li className="product_item">
                      <a className="product_link" href="#">
                        Mobile
                      </a>
                    </li>
                    <li className="product_item">
                      <a className="product_link" href="#">
                        Actions
                      </a>
                    </li>
                    <li className="product_item">
                      <a className="product_link" href="#">
                        Codespaces
                      </a>
                    </li>
                    <li className="product_item">
                      <a className="product_link" href="#">
                        Capilot
                      </a>
                    </li>
                    <li className="product_item">
                      <a className="product_link" href="#">
                        Packages
                      </a>
                    </li>
                    <li className="product_item">
                      <a className="product_link" href="#">
                        Security
                      </a>
                    </li>
                    <li className="product_item">
                      <a className="product_link" href="#">
                        Code review
                      </a>
                    </li>
                    <li className="product_item">
                      <a className="product_link" href="#">
                        Issues
                      </a>
                    </li>
                    <li className="product_item">
                      <a className="product_link" href="#">
                        Discussions
                      </a>
                    </li>
                    <li className="product_item">
                      <a className="product_link" href="#">
                        Integrations
                      </a>
                    </li>
                    <div className="line"></div>
                    <li className="pro_item">
                      <a className="pro-active" href="#">
                        GitHub Sponsors
                      </a>
                    </li>
                    <li className="pro_item">
                      <a className="pro-active" href="#">
                        {" "}
                        Customer stories
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a className="head-link" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="head-link" href="#">
                  Enterprice
                </a>
              </li>
              <li className="explore">
                <div className="d-flex align-items-center">
                  <a className="head-link" href="#">
                    Explore
                  </a>
                  <i className="fas fa-chevron-down"></i>
                  <div className="explore_list">
                    <ul>
                      <li className="product_item">
                        <a className=" pro-active" href="#">
                          Explore GitHub
                        </a>
                      </li>
                      <div className="line"></div>
                      <p className="addition">Learn and contribute</p>
                      <li className="product_item">
                        <a className="product_link" href="#">
                          Topics
                        </a>
                      </li>
                      <li className="product_item">
                        <a className="product_link" href="#">
                          Collections
                        </a>
                      </li>
                      <li className="product_item">
                        <a className="product_link" href="#">
                          Trending
                        </a>
                      </li>
                      <li className="product_item">
                        <a className="product_link" href="#">
                          Skills
                        </a>
                      </li>
                      <li className="product_item">
                        <a className="product_link" href="#">
                          GitHub sponsors
                        </a>
                      </li>
                      <li className="product_item">
                        <a className="product_link" href="#">
                          Open sourse guides
                        </a>
                      </li>
                      <div className="line"></div>
                      <li className="product_item">
                        <a className="product_link" href="#">
                          The ReadME Project
                        </a>
                      </li>
                      <li className="product_item">
                        <a className="product_link" href="#">
                          Events
                        </a>
                      </li>
                      <li className="product_item">
                        <a className="product_link" href="#">
                          Discussions
                        </a>
                      </li>
                      <li className="product_item">
                        <a className="product_link" href="#">
                          Community forum
                        </a>
                      </li>
                      <div className="line"></div>
                      <p className="addition">Learn and contribute</p>

                      <li className="product_item">
                        <a className="product_link" href="#">
                          GitHub Educcation
                        </a>
                      </li>
                      <li className="product_item">
                        <a className="product_link" href="#">
                          GitHub Stars program{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a className="head-link" href="#">
                  Marketplace
                </a>
              </li>
              <li className="pricing">
                <div className="d-flex align-items-center">
                  <a className="head-link" href="#">
                    Pricing
                  </a>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="pricing_list">
                  <ul>
                    <li className="product_item">
                      <a className=" pro-active" href="#">
                        Plans
                      </a>
                    </li>
                    <li className="product_item">
                      <a className="product_link" href="#">
                        Compare plans
                      </a>
                    </li>
                    <li className="product_item">
                      <a className="product_link" href="#">
                        Contact sales
                      </a>
                    </li>
                    <div className="line"></div>
                    <li className="pro_item">
                      <a className="pro-active" href="#">
                        Educations
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="d-flex sign-section align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between">
              <form>
                <input
                  className="form-control search-input"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setName(e.target.value)}
                />
              </form>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                aria-hidden="true"
                className="mr-1 header-search-key-slash"
              >
                <path
                  fill="none"
                  stroke="#979A9C"
                  opacity=".4"
                  d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
                ></path>
                <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
              </svg>
            </div>
            <p className="sign text-light" onClick={() => back("/")}>
              Sign in
            </p>
            <p className="sign sign-up text-light">Sign up</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default ProfileHead;
