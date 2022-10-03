import React, { useState, useEffect } from "react";
import Login from "./Components/Login/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Overview from "./Components/Overview/Overview";
import Repository from "./Components/Repository/Repository.jsx";
import Projects from "./Components/Projects/Project";
import Packages from "./Components/Packages/Package";
import Stars from "./Components/Stars/Star";
import Footer from "./Components/Footer/Footer";
import ProfileHead from "./Components/ProfileHead/ProfileHead";
import Menu from "./Components/Menu/Menu";
import { DataProvider } from "./Context/dataContext";
import Followers from "./Components/Followers/Followers";
import Following from "./Components/Following/Following";
import Repo from "./Components/Repo/Repo";

const App = () => {
  const { pathname } = useLocation();

  const [person, setPerson] = useState([]);
  const [followers, setFollowrs] = useState([]);
  const [following, setFollowing] = useState([]);

  const personlaData = async () => {
    const response = await fetch(`https://api.github.com/users/mukhriddin-dev`);
    const result = await response.json();
    setPerson(result);
  };
  console.log(person);

  useEffect(() => {
    personlaData();
  }, []);

  const followersData = async () => {
    const response = await fetch(
      `https://api.github.com/users/mukhriddin-dev/followers`
    );
    const result = await response.json();
    setFollowrs(result);
  };
  console.log(followers);

  useEffect(() => {
    followersData();
  }, []);

  const followingData = async () => {
    const responses = await fetch(
      `https://api.github.com/users/mukhriddin-dev/following`
    );
    const results = await responses.json();
    setFollowing(results);
  };
  console.log(following);

  useEffect(() => {
    followingData();
  }, []);

  return (
    <>
      <DataProvider>
        {pathname === "/" ? "" : <ProfileHead />}
        {pathname === "/" ? "" : <Menu person={person} />}
        <main className="main">
          <div className="container d-flex">
            {pathname === "/" ? "" : <Profile person={person} />}
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profile/overview" element={<Overview />} />
              <Route
                path="/profile/following"
                element={following.map((user, idx) => {
                  return <Following key={idx} user={user} />;
                })}
              />
              <Route path="/profile/repository" element={<Repository />} />
              <Route path="/profile/repository/:name" element={<Repo />} />
              <Route path="/profile/projects" element={<Projects />} />
              <Route path="/profile/package" element={<Packages />} />
              <Route path="/profile/stars" element={<Stars />} />
              <Route path="/profile/following" element={<Following />} />
              <Route
                path="/profile/followers"
                element={followers.map((fol, num) => {
                  return <Followers fol={fol} key={num} />;
                })}
              />
            </Routes>
          </div>
        </main>
        {pathname === "/" ? "" : <Footer />}
      </DataProvider>
    </>
  );
};

export default App;
