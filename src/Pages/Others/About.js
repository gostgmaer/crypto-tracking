import React from "react";
import "./Styles.scss";
const About = () => {
  return (
    <div className="aboutus">
      <main>
        <div className="about">
          <div className="title">
            <h1>About The Company</h1>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              modi vel blanditiis doloribus commodi impedit!. Lorem ipsum dolor
              sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <div className="card_img">
              <i className="fas fa-rocket"></i>
            </div>
            <div className="card_title">HTML</div>
            <div className="card_body">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <i className="fab fa-cloudversify"></i>
            </div>
            <div className="card_title">CSS</div>
            <div className="card_body">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <i className="fas fa-user-astronaut"></i>
            </div>
            <div className="card_title">JAVASCRIPT</div>
            <div className="card_body">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
