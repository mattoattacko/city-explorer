import React from 'react';

const Meetups = props => {
  return (
    <section>
      <h3>Local Meetup Results</h3>
      <ul className="meetups-results">
        {props.data &&
          props.data.map((item, key) => {
            return (
              <li key={key}>
                <a href="{ item.link }">{item.name}</a>
                <p>Hosted by: {item.host}</p>
                <p>Created on: {item.creation_date}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Meetups;