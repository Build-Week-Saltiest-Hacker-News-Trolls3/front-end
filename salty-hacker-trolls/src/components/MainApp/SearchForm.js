import React from "react";
import { Input } from '../../styles/FormStyles';


export default function SearchForm(props) {
  return (
    <section className="search-form">
      <form>
        <Input 
          type="text"
          onChange={props.handleInput}
          value={props.query}
          name="name"
          tabIndex="0"
          placeholder="search by name"
          autoComplete="off"
          />
      </form>
    </section>
  );
}
