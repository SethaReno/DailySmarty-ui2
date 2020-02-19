import React, { Component } from "react";
import Logo from './logo';
import SearchBar from './searchBar';

class Results extends Component {

  handleSearchBarSubmit(query) {
      console.log(query);
  }

  render() {
    return (
      <div>
        <Logo size={55} />
        <SearcBar onSubmit={(query) => this.hadleSearchBarSubmit(query)}/>
      </div>
    );
  }
}
export default Results;
