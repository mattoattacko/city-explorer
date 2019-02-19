import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>City Explorer</h1>
        <p>
          Enter a location below to learn about the weather, events,
          restaurants, movies filmed there, and more!
        </p>
      </header>
    );
  }
}

export default Header;