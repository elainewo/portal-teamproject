import React, { Component } from 'react';
import KulturItem from './KulturItem';

class KulturList extends Component {
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
        const KulturList = this.state.articles.map((elt, i) => {
            return <KulturItem />
        })
        return (
            <div class="flexbox">
                <div class="item">
                    <KulturItem />
        })
                </div>
                <div class="item">

                </div>
                <div class="item">

                </div>
                <div class="item">
                    <img src="https://unsplash.it/800/400?random" />
                    <p class="title">4th item</p>
                </div>
                <div class="item">
                    <img src="https://unsplash.it/480/700?random" />
                    <p class="title">5th item</p>
                </div>
                <div class="item">
                    <img src="https://unsplash.it/680/420?random" />
                    <p class="title">6th item</p>
                </div>
                <div class="item">
                    <img src="https://unsplash.it/740/480?random" />
                    <p class="title">7th item</p>
                </div>
                <div class="item">
                    <img src="https://unsplash.it/840/440?random" />
                    <p class="title">8th item</p>
                </div>
                <div class="item">
                    <img src="https://unsplash.it/640/380?random" />
                    <p class="title">9th item</p>
                </div>
                <div class="item">
                    <img src="https://unsplash.it/500/680?random" />
                    <p class="title">10th item</p>
                </div>
            </div>
        );
    }
}

export default KulturList;