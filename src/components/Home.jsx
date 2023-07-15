import React from 'react';
import '../styles/homeStyles/home.css';
import bg2 from '../assets/tech_sage-homebg2.png';

function Home() {
  return (
    <>
      <div className="container1">
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
    </>
  );
}

export default Home;
