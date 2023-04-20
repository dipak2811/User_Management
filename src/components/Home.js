import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove } from "../reducers/UserDetails";
import "./style/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const isLogin = localStorage.getItem("isLogin");
  const navigate = useNavigate();
  const selector = useSelector((state) => state.data);
  useEffect(() => {
    if (isLogin === "false" || !isLogin) {
      navigate("/signup");
    }
  });

  console.log(selector);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="btn btn-danger"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  onClick={() => {
                    localStorage.setItem("isLogin", false);
                    dispatch(remove());
                    navigate("/signup");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="wrapper">
        <div className="left">
          <img src={selector.img} alt="user" width="100" />
          <h4>{selector.name}</h4>
        </div>
        <div className="right">
          <div className="info">
            <h3>Information</h3>
            <div className="info_data">
              <div className="data">
                <h5>Email:</h5>
                <p>{selector.email}</p>
              </div>
              <div className="data">
                <h5>Phone:</h5>
                <p>
                  {selector.phone?.includes("+91")
                    ? selector.phone.slice(3)
                    : selector.phone?.includes("91")
                    ? selector.phone.slice(2)
                    : selector.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
