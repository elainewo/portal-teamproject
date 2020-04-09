import React, { Component } from "react";
import "./kulturitem.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

class KulturItem extends Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=kultur&apiKey=c5045fc4544a4c79bd7e70dcec97e263"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ articles: data.articles });
      });
  }
  render() {
    return (
      <article>
        <section className="culture-section">
          {this.state.articles.map((elt, i) => (
            <div
              key={i}
              class="overlay-box"
              style={{ backgroundImage: `url(${elt.urlToImage})` }}
            >
              <div class="desc">
                <article>
                  <h3>{elt.title}</h3>
                  <p>{elt.description}</p>
                  <p>Quelle: {elt.source.name}</p>
                  <p>Autor: {elt.author}</p>
                  <a className="culuture-link" href={elt.url}>
                    Read More
                  </a>
                  <h3>
                    <Link to="/">
                      <FaHome color="white" size="7rem" />
                    </Link>
                  </h3>
                </article>
              </div>
            </div>
          ))}
        </section>
      </article>
    );
  }
}

export default KulturItem;
