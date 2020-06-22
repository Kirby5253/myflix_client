import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import './main-view.scss';

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';

export class MainView extends React.Component {
	constructor() {
		super();

		this.state = {
			movies: null,
			selectedMovie: null,
			user: null
		};
	}

	// One of the "hooks" available in a React Component
	componentDidMount() {
		axios
			.get('https://myflixdb5253.herokuapp.com/movies')
			.then((response) => {
				// Assign the result to the state
				this.setState({
					movies: response.data
				});
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	onMovieClick(movie) {
		this.setState({
			selectedMovie: movie
		});
	}

	onLoggedIn(user) {
		this.setState({
			user
		});
	}

	onBackClick() {
		this.setState({
			selectedMovie: null
		});
	}

	render() {
		// If the state isn't initialized, this will throw on runtime
		// before the data is initially loaded
		const { movies, selectedMovie, user } = this.state;

		if (!user)
			return (
				<Container>
					<LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
				</Container>
			);

		// Before the movies have been loaded
		if (!movies) return <div className="main-view" />;

		return (
			<Container>
				<div className="main-view">
					{selectedMovie ? (
						<MovieView movie={selectedMovie} onClick={(movie) => this.onBackClick(movie)} />
					) : (
						movies.map((movie) => (
							<MovieCard key={movie._id} movie={movie} onClick={(movie) => this.onMovieClick(movie)} />
						))
					)}
				</div>
			</Container>
		);
	}
}
