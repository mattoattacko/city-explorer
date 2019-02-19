import React from 'react';

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="city">Search for a location</label>
      <input
        type="text"
        name="city"
        onChange={props.handleChange}
        placeholder="Enter a location here"
      />
      <button type="submit">Lets Explore!</button>
    </form>
  );
}