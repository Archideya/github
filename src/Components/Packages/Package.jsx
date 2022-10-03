import React from "react";
import "./pack.css";
import { FaDocker } from "react-icons/fa";
import { SiApache, SiNuget, SiRubygems } from "react-icons/si";
import { ImNpm } from "react-icons/im";
import { TbContainer } from "react-icons/tb";

const Package = () => {
  return (
    <>
      <div className="package">
        <div className="package-top container text-center">
          <h1 className="text-light">Get started with GitHub Packages</h1>
          <p className="package-text">
            Safely publish packages, store your packages alongside your code,
            and share your packages privately with your team.
          </p>
        </div>
        <div className="pack-body">
          <p className="pack-body_text">Choose a registry</p>
          <div className="d-flex flex-wrap justify-content-between container">
            <div className="pack-card">
              <div className="d-flex">
                <FaDocker className="docker" />
                <p className="text-light card-title">Docker</p>
              </div>
              <p className="dock-text">
                A software platform used for building applications based on
                containers — small and lightweight execution environments.
              </p>
              <div className="btn2 learn">Learn more</div>
            </div>
            <div className="pack-card">
              <div className="d-flex">
                <SiApache className="docker apache" />
                <p className="text-light card-title">Docker</p>
              </div>
              <p className="dock-text">
                A software platform used for building applications based on
                containers — small and lightweight execution environments.
              </p>
              <div className="btn2 learn">Learn more</div>
            </div>
            <div className="pack-card">
              <div className="d-flex">
                <SiNuget className="docker nuget" />
                <p className="text-light card-title">Docker</p>
              </div>
              <p className="dock-text">
                A software platform used for building applications based on
                containers — small and lightweight execution environments.
              </p>
              <div className="btn2 learn">Learn more</div>
            </div>
            <div className="pack-card">
              <div className="d-flex">
                <SiRubygems className="docker ruby" />
                <p className="text-light card-title">Docker</p>
              </div>
              <p className="dock-text">
                A software platform used for building applications based on
                containers — small and lightweight execution environments.
              </p>
              <div className="btn2 learn">Learn more</div>
            </div>
            <div className="pack-card">
              <div className="d-flex">
                <ImNpm className="docker npm" />
                <p className="text-light card-title">Docker</p>
              </div>
              <p className="dock-text">
                A software platform used for building applications based on
                containers — small and lightweight execution environments.
              </p>
              <div className="btn2 learn">Learn more</div>
            </div>
            <div className="pack-card">
              <div className="d-flex">
                <TbContainer className="docker conta" />
                <p className="text-light card-title">Docker</p>
              </div>
              <p className="dock-text">
                A software platform used for building applications based on
                containers — small and lightweight execution environments.
              </p>
              <div className="btn2 learn">Learn more</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
