import React from "react";
import profile from "../images/profile.jpg";
import "../css/About.css";
// import Home from "./Home";


function About() {
  return (
    <>
      {/* <Home /> */}
      <div class="about">
        <h1>About me</h1>
        <h3>My introduction</h3>
        <section class="infoContainer">
          <div class="picture">
            <img src={profile} alt=""></img>
          </div>
          <div class="info">
            As a dedicated Information Science Engineering student, I
            bring a solid foundation in frontend development,Web Desgning complemented by a
            fervent enthusiasm for staying at the forefront of technological
            advancements. Eager to embrace new challenges, I possess a proactive
            mindset and a commitment to continuous learning, ensuring I stay
            adept at the latest trends and technologies shaping the dynamic
            landscape of the IT industry.
            <div class="extras">
              <div class="mark">
                <h5 class="p1">8.9+</h5>
                <div>CGPA</div>
              </div>
              <div class="projects">
                <h5 class="p1">01</h5>
                <div>Projects</div>
              </div>
              <div class="exp">
                <h5 class="p1">1 month</h5>
                <div>Experience</div>
              </div>
            </div>
            <div class="ext">
              <a href="0"> Download CV</a>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

export default About;