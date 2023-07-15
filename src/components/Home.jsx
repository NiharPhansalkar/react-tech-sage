import React from 'react';
import '../styles/homeStyles/home.css';
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai';
import bg2 from '../assets/tech_sage-homebg2.png';

function Home() {
  return (
    <>
      <div className="container1" id="home">
        <main>
          <h1>Welcome to Tech Sage</h1>
          <p>A place for all solutions to your web problems</p>
        </main>
      </div>
      <div className="container2">
        <img src={bg2} alt="Graphics" />
        <div>
          <p>
            TechSage, a one stop solution for all of your web related problems!
            Providing our customers with full stack solutions since 2023.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="container3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales.
            Tellus
            molestie nunc non blandit massa enim nec. Dolor sit amet consectetur adipiscing elit
            duis
            tristique. Diam ut venenatis tellus in metus. Mattis vulputate enim nulla aliquet. Augue
            neque gravida
            in fermentum et sollicitudin ac orci. Amet massa vitae tortor condimentum lacinia quis.
            Urna neque viverra justo nec ultrices. Lectus magna fringilla urna porttitor.
            Nulla facilisi
            morbi tempus iaculis urna id volutpat. Erat pellentesque adipiscing commodo elit at
            imperdiet
            dui accumsan sit. Cras ornare arcu dui vivamus arcu. Viverra tellus in hac habitasse
            platea
            dictumst vestibulum. A pellentesque sit amet porttitor eget dolor. Volutpat consequat
            mauris
            nunc congue nisi. Nunc faucibus a pellentesque sit amet porttitor. Vulputate mi sit amet
            mauris
            commodo quis imperdiet massa tincidunt. Fusce id velit ut tortor pretium viverra.
          </p>
        </div>
      </div>
      <div className="container4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{
              animationDelay: '0.3s',
            }}
            >
              <AiFillGoogleCircle />
              <p> Google </p>
            </div>
            <div style={{
              animationDelay: '0.5s',
            }}
            >
              <AiFillAmazonCircle />
              <p> Amazon </p>
            </div>
            <div style={{
              animationDelay: '0.7s',
            }}
            >
              <AiFillYoutube />
              <p> YouTube </p>
            </div>
            <div style={{
              animationDelay: '0.9s',
            }}
            >
              <AiFillInstagram />
              <p> Instagram </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
