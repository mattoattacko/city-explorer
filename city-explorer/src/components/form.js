import React from 'react';

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="city">Where Would You Like To Learn About?</label><br></br>
      <input
        type="text"
        name="city"
        onChange={props.handleChange}
        placeholder="Please Enter Location"
      />
      <button type="submit">Lets Explore!</button>
    </form>
  );
}