import React from "react";
import Navbar from "../components/Navbar";
import earth from "../images/researchBg_remove.png";
export default function Research() {
  return (
    <div id="researchBG">
      <Navbar />
      <div id="macro">
        <div className="micro1 micro">
          <img src={earth} alt="earth" height={120} />
          <section>
            <h2>Length of day</h2>
            <h3>23.9hrs</h3>
          </section>
        </div>
        <div className="micro2 micro">
          <img src={earth} alt="earth" height={120} />
          <section>
            <h2>Length of year</h2>
            <h3>365.25 days</h3>
          </section>
        </div>
        <div className="micro3 micro">
          <img src={earth} alt="earth" height={120} />
          <section>
            <h2>
              Distance from <br />
              the Sun
            </h2>
            <h3>150,196,428km</h3>
          </section>
        </div>
        <div className="micro4 micro">
          <img src={earth} alt="earth" height={120} />
          <section>
            <h2>
              One way light <br />
              time to Sun
            </h2>
            <h3>8.350022 minutes</h3>
          </section>
        </div>
      </div>
      <div id="details">
        <p>
          "While Earth is only the <span>fifth</span> largest planet in the
          solar system, it is the only world in our solar system with liquid
          water on the surface. Just slightly larger than nearby Venus, Earth is
          the biggest of the four planets closest to the Sun, all of which are
          made of rock and metal.
          <br />
          <br />
          Earth is the only planet in the solar system whose English name does
          not come from Greek or Roman mythology. The name was taken from Old
          English and Germanic. It simply means "the ground." There are, of
          course, many names for our planet in the thousands of languages spoken
          by the people of the third planet from the Sun"
          <br />
          <br />
          More info at:{" "}
          <a href="https://science.nasa.gov/earth/facts/" target="_blank">
            Nasa
          </a>
        </p>
      </div>
    </div>
  );
}
