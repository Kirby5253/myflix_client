import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './movie-view.scss';

export class MovieView extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		const { movie, onClick } = this.props;

		if (!movie) return null;

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
				<div className="movie-genre">
					<span className="label">Genre: </span>
					<span className="value">{movie.Genre.Name}</span>
				</div>
				<div className="movie-director">
					<span className="label">Director: </span>
					<span className="value">{movie.Director.Name}</span>
				</div>
				<div className="movie-actors">
					<span className="label">Leading Cast: </span>
					<span className="value">{movie.Actors.join(',  ')}</span>
				</div>
				<br />
				<Button variant="dark" onClick={() => onClick(movie)}>
					Back
				</Button>
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
	}).isRequired,
	onClick: PropTypes.func.isRequired
};
