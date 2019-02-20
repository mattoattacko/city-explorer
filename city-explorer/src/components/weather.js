import React from 'react';

const Weather = props => {
  return (
    <section>
      <h3>What is the Weather Like?</h3>
      <ul className="weather-results">
        {props.data &&
          props.data.map((item, key) => {
            return (
              <li key={key}>
                The forecast for {item.time} is {item.forecast}
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Weather;