import React from 'react';
import axios from 'axios';
import './main-view.scss';
import { Nav, Navbar, NavDropdown, Row, Container, Col } from 'react-bootstrap';

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
			user: null,
			newUser: false
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

	createUser() {
		this.setState({
			newUser: true
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
		const { movies, selectedMovie, user, newUser } = this.state;

		if (!user)
			return !newUser ? (
				<Container>
					<LoginView createUser={() => this.createUser()} onLoggedIn={(user) => this.onLoggedIn(user)} />
				</Container>
			) : (
				<Container>
					<RegistrationView onLoggedIn={(user) => this.onLoggedIn(user)} />
				</Container>
			);

		// Before the movies have been loaded
		if (!movies) return <div className="main-view" />;

		return (
			<Container>
				<div className="navbar">
					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
						<Navbar.Brand href="#home">MyFLix</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="/movies">Movies</Nav.Link>
								<NavDropdown title="Account" id="collapsible-nav-dropdown">
									<NavDropdown.Item href="/Account">View Account Info</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">View Favorites</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>

				<div className="main-view">
					{selectedMovie ? (
						<MovieView movie={selectedMovie} onClick={(movie) => this.onBackClick(movie)} />
					) : (
						movies.map((movie) => (
							<Container>
								<Row>
									<Col>
										<MovieCard
											key={movie._id}
											movie={movie}
											onClick={(movie) => this.onMovieClick(movie)}
										/>
									</Col>
								</Row>
							</Container>
						))
					)}
				</div>
			</Container>
		);
	}
}
