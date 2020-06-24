import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './movie-view.scss';
import axios from 'axios';

import { Link } from 'react-router-dom';

export class MovieView extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		const { movie, user, addToFav } = this.props;

		if (!movie) return null;

		console.log(user.Favorite_Movies);

		return (
			<div className="movie-view">
				<img className="movie-poster" src={movie.ImagePath} />
				<div className="movie-title">
					<span className="label">Title: </span>
					<span className="value">{movie.Title}</span>
				</div>
				<div className="movie-description">
					<span className="label">Description: </span>
					<span className="value">{movie.Description}</span>
				</div>
				<div className="movie-actors">
					<span className="label">Leading Cast: </span>
					<span className="value">{movie.Actors.join(',  ')}</span>
				</div>
				<div className="movie-genre">
					<Link to={`/genres/${movie.Genre.Name}`}>
						<Button variant="link" className="label link">
							Genre:{' '}
						</Button>
					</Link>
					<span className="value">{movie.Genre.Name}</span>
				</div>
				<div className="movie-director">
					<Link to={`/directors/${movie.Director.Name}`}>
						<Button variant="link" className="label link">
							Director:{' '}
						</Button>
					</Link>
					<span className="value">{movie.Director.Name}</span>
				</div>

				<br />
				<Link to={`/`}>
					<Button variant="dark">Back</Button>
				</Link>
			</div>
		);
	}
}

MovieView.propTypes = {
	movie: PropTypes.shape({
		Title: PropTypes.string.isRequired,
		Description: PropTypes.string.isRequired,
		ImagePath: PropTypes.string.isRequired,
		Director: PropTypes.object,
		Genre: PropTypes.object,
		Actors: PropTypes.array
	})
};
