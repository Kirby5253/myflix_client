import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Container, Grid, Row, Col } from 'react-bootstrap';
import './movie-card.scss';

export class MovieCard extends React.Component {
	render() {
		const { movie, onClick } = this.props;

		return (
			<div className="col movie-cards">
				<Card text={'white'} style={{ width: '15rem' }} bg={'dark'}>
					<Card.Img className="movie-card-img" variant="top" src={movie.ImagePath} />
					<Card.Body>
						<Card.Title className="movie-title">{movie.Title}</Card.Title>
						<Card.Text>{movie.Description}</Card.Text>
						<Button onClick={() => onClick(movie)} variant="link">
							More Details
						</Button>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

MovieCard.propTypes = {
	movie: PropTypes.shape({
		Title: PropTypes.string.isRequired,
		Description: PropTypes.string.isRequired,
		ImagePath: PropTypes.string.isRequired
	}).isRequired,
	onClick: PropTypes.func.isRequired
};
