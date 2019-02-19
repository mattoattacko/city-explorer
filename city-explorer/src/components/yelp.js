import React from 'react';

const Yelp = props => {
  return (
    <section className="yelp-container">
      <h3>Results from the Yelp API</h3>
      <ul className="yelp-results">
        {props.data &&
          props.data.map((item, key) => {
            return (
              <li key={key}>
                <a href="{ item.url }">{item.name}</a>
                <p>
                  The average rating is {item.rating} out of 5 and the average
                  cost is {item.price} out of 4
                </p>
                <img src={ item.image_url } alt="Yelp images" />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Yelp;