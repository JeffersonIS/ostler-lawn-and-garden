import React from 'react';
import './About.css';
import mowing1Img from '../images/mowing1.png';
import brosmowingImg from '../images/brosmowing.JPG';

function About() {
  return (
    <>
          <div className="about-section">
        <div className="about-content">
          <div className="guarantee-section">
            <h2>Our 100% Satisfaction Guarantee</h2>
            <p className="about-description">
              We take <strong>pride in delivering a perfectly manicured lawn</strong> every time. If you're not <strong>100% satisfied</strong> with our service, let us know, and we'll mow your lawn again for <strong>free</strong>—no hassle, no questions asked.
            </p>
          </div>
        </div>

        <div className="about-image">
          <img
            src={mowing1Img}
            alt="Professional lawn care service"
            className="about-photo services-description-img"
          />
        </div>
      </div>

      <div className="about-section">
        <div className="about-content">
          <h2>In Business Since 2007</h2>
          <p className="about-description">
            We started mowing with our siblings in 2007 to make money for church missions and college. Now it's just Jefferson & Benson.
          </p>
          <p className="about-description">
            We took a break for a bit to go to serve those missions, go to college, and start families...but now we're back! And we've mowed hundreds of Tri-Cities lawns.
          </p>
          <p className="about-description">
            We're a small but mighty operation making the Tri Cities beautiful one lawn at a time.
          </p>

          <p className="about-description">
            Fill out the form above or call/text us at 509-554-8753.
          </p>
        </div>
        <div className="about-image">
          <img
            src={brosmowingImg}
            alt="Professional lawn care service"
            className="about-photo services-description-img"
          />
        </div>
      </div>
    </>
  );
}

export default About;