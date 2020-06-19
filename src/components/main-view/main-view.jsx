import React from 'react';
import axios from 'axios';

class MainView extends React.Component{
  constructor() {
    super();

    // Initialize the state to an empty object so we can destructure it later
    this.state = {};
  }

  render() {
    return (
      <div className="main-view"></div>
    );
  }
}

export class MainView extends React.Component {
  componentDidMount() {
    axios.get('<my-api-endpoint/movies')
      .then(response => {
        this.setState({
          movies:response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render () {
    // before the data is initially loaded
    const {movies} = this.state;

    // Before the movies have been loaded
    if (!movies) return <div className="main-view"/>;

    return (
      <div className="main-view">
        {movies.map(movie => (
          <div className="movie-card" key={movie._id}>{movie.Title}</div>
        ))}
      </div>
    );
  }
}

