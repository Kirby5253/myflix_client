import React from 'react';
import axios from 'axios';
import './main-view.scss';
import { Nav, Navbar, Container } from 'react-bootstrap';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { ProfileView } from '../profile-view/profile-view';

export class MainView extends React.Component {
	constructor() {
		super();

		this.state = {
			movies: [],
			selectedMovie: null,
			user: null,
			newUser: false,
			users: []
		};
	}

	// One of the "hooks" available in a React Component
	// Takes the token and allows users to stay logged in
	componentDidMount() {
		let accessToken = localStorage.getItem('token');
		if (accessToken !== null) {
			this.setState({
				user: localStorage.getItem('user')
			});
			this.getMovies(accessToken);
			this.getUser(accessToken);
		}
	}

	onLoggedIn(authData) {
		console.log(authData);
		this.setState({
			user: authData.user.Username
		});

		localStorage.setItem('token', authData.token);
		localStorage.setItem('user', authData.user.Username);
		this.getMovies(authData.token);
		this.getUser(authData.token);
	}

	getMovies(token) {
		axios
			.get('https://myflixdb5253.herokuapp.com/movies', {
				headers: { Authorization: `Bearer ${token}` }
			})
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

	getUser(token) {
		axios
			.get('https://myflixdb5253.herokuapp.com/users', {
				headers: { Authorization: `Bearer ${token}` }
			})
			.then((response) => {
				this.setState({
					users: response.data
				});
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	createAccount(user) {
		this.setState({
			user
		});
	}

	createUser() {
		this.setState({
			newUser: true
		});
	}

	logoutUser(user) {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
	}

	render() {
		// If the state isn't initialized, this will throw on runtime
		// before the data is initially loaded
		const { movies, user, users } = this.state;

		// Before the movies have been loaded
		if (!movies) return <div className="main-view" />;

		console.log(user);

		return (
			<Router>
				<div className="navbar">
					<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
						<Navbar.Brand href="/">
							<h1>MyFlix</h1>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="/">Movies</Nav.Link>
								<Nav.Link href="#action/3.2">Favorites</Nav.Link>
								<Nav.Link href={`/profile/${user}`}>Account</Nav.Link>
								<Nav.Link onClick={(user) => this.logoutUser()} href="http://localhost:1234/">
									Logout
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>

				<div className="main-view">
					<Route
						exact
						path="/"
						render={() => {
							if (!user)
								return (
									<Container>
										<LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
									</Container>
								);
							return movies.map((m) => (
								<div className="grid">
									<MovieCard user={users.find((u) => u.Username === user)} key={m._id} movie={m} />
								</div>
							));
						}}
					/>

					<Route
						path="/register"
						render={() => {
							if (!user)
								return (
									<Container>
										<RegistrationView />
									</Container>
								);
						}}
					/>

					<Route
						path="/profile/:username"
						render={({ match }) => (
							<ProfileView user={users.find((m) => m.Username === match.params.username)} />
						)}
					/>

					<Route
						path="/movies/:movieId"
						render={({ match }) => <MovieView movie={movies.find((m) => m._id === match.params.movieId)} />}
					/>

					<Route
						path="/genres/:name"
						render={({ match }) => {
							if (!movies) return <div className="main-view" />;
							return <GenreView genre={movies.find((m) => m.Genre.Name === match.params.name).Genre} />;
						}}
					/>

					<Route
						path="/directors/:name"
						render={({ match }) => {
							if (!movies) return <div className="main-view" />;
							return (
								<DirectorView
									director={movies.find((m) => m.Director.Name === match.params.name).Director}
								/>
							);
						}}
					/>
				</div>
			</Router>
		);
	}
}
