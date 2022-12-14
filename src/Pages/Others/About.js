import React from "react";
import "./Styles.scss";
const About = () => {
  return (
    <div className="aboutus">
      <main>
        <div class="about">
          <div class="title">
            <h1>About The Company</h1>
          </div>
          <div class="desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              modi vel blanditiis doloribus commodi impedit!. Lorem ipsum dolor
              sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="card">
            <div class="card_img">
              <i class="fas fa-rocket"></i>
            </div>
            <div class="card_title">HTML</div>
            <div class="card_body">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="card_img">
              <i class="fab fa-cloudversify"></i>
            </div>
            <div class="card_title">CSS</div>
            <div class="card_body">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="card_img">
              <i class="fas fa-user-astronaut"></i>
            </div>
            <div class="card_title">JAVASCRIPT</div>
            <div class="card_body">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
