import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import GamesItem from "./GamesItem";
import Darkmode from "darkmode-js";

var options = {
  bottom: "2%", // default: '32px'
  right: ".2rem", // default: '32px'
  left: "unset", // default: 'unset'
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

class Games extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=game&apiKey=4c76937982ca48dba378fa0b10a568f8"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ articles: data.articles });
      });
  }
  deletePerson = (index) => {
    const person = this.state.articles;
    person.splice(index, 1);
    this.setState({ articles: person });
  };

  render() {
    return (
      <div className="wrapper">
        <h3>
          <Link to="/">
            <FaHome color="black" size="3rem" />
          </Link>
        </h3>
        <div className="gamesSite">
          {this.state.articles.map((article, i) => (
            <div className="new" key={i}>
              <div className="beschreibung">
                <img src={article.urlToImage} alt=""></img>

                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
              <GamesItem click={() => this.deletePerson(i)} />
              <a href={article.url} target="blank">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Games;
