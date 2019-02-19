import React from 'react';
import superagent from 'superagent';
import Map from './map.js';
import Results from './results.js';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isHidden: true,
        method: 'get',
        body: {},
        city: ""
      };
    }

    handleDynamicWords = event => {
        let words = event.target.value;
        this.setState({ city: words });
      };

    fetchCityData = event => {
      event.preventDefault();
      console.log(this.state.city);
      let location = `https://city-explorer-backend.herokuapp.com/location`
      console.log(location);
      superagent(this.state.method, location)
      .query({data: this.state.city})
      .then( response => {
          let body = response.body;
          this.setState({
            body,
            isHidden: !this.state.isHidden
          });
      })
      .catch(error => {
          console.log(error);
      })
    };
  
    render() {
      return (
        <React.Fragment>
          <main>
              <form id="search-form">
              <label>Search for a location</label>
              <input onChange={this.handleDynamicWords} type="text" name="search" id="input-search" placeholder="Enter a location here"></input>
              <button className="submit" onClick={this.fetchCityData}>
              Explore
            </button>
            </form>
            {!this.state.isHidden && <Map location={this.state.body} visibility={this.state.isHidden}/>}
            {!this.state.isHidden && <Results location={this.state.body} visibility={this.state.isHidden}/>}
          </main>
        </React.Fragment>
      );
    }
  }
  

export default Form;