import React from 'react';
import superagent from 'superagent';
import WeatherData from './containerData/weatherData.js';
import YelpData from './containerData/yelpData.js';
import MeetupData from './containerData/meetupData.js';
import MovieData from './containerData/movieData.js';
import TrailsData from './containerData/trailsData.js';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'get',
    };
  }  
  getResource = (resource) => {
    let url = `https://city-explorer-backend.herokuapp.com/${resource}`
    console.log(url);
    superagent(this.state.method, url)
    .query({data: this.props.location})
    .then( response => {
      let body = response.body;
      // this.setState({[resource]: body})
    })
  }
  
  render() {
    if (this.props.visibility === true) {
      return <div></div>
    } else {
      return (
        <React.Fragment>
          <div className="column-container">
            <WeatherData API={this.getResource} />
            <YelpData API={this.getResource} />
            <MeetupData API={this.getResource} />
            <MovieData API={this.getResource} />
            <TrailsData API={this.getResource} />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Results;