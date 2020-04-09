import React from "react";
import { Link } from "react-router-dom";
import Darkmode from "darkmode-js";

var options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

const Home = () => {
  return (
    <div className="home">
      <section className="politik">
        <Link className="link" to="/politik">
          <h2>POLITIK</h2>
        </Link>
      </section>
      <section className="gaming">
        <Link className="link" to="/games">
          <span>
            <h2>GAMING</h2>
          </span>
        </Link>
      </section>
      <section className="kultur">
        <Link className="link" to="/kultur">
          <h2>KULTUR</h2>
        </Link>
      </section>
    </div>
  );
};

export default Home;
