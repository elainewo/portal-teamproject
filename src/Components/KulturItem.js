import React, { Component } from 'react';
import './kulturitem.css';

class KulturItem extends Component {
    state = {
        articles: []
    }
    componentDidMount() {
        fetch('https://newsapi.org/v2/everything?q=kultur&apiKey=c5045fc4544a4c79bd7e70dcec97e263')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ articles: data.articles })
            });
    }
    render() {
        return (
            <section className="culture-section">
                {this.state.articles.map((elt, i) =>

                    < div key={i} class="overlay-box" style={{ backgroundImage: `url(${elt.urlToImage})` }} >
                        <div class="desc">
                            <article >
                                <h3>{elt.title}</h3>
                                <p>{elt.description}</p>
                                <p>Quelle: {elt.source.name}</p>
                                <p>Autor: {elt.author}</p>
                                <a className="culuture-link" href={elt.url}>Read More</a>
                            </article>
                        </div>
                    </div>
                )
                }
            </section>);
    }
}

export default KulturItem;