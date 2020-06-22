import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './movie-card.scss';

export class MovieCard extends React.Component {
	render() {
		const { movie, onClick } = this.props;

		return (
			<Container className="movie-cards">
				<Card text={'white'} style={{ width: '16rem' }} bg={'dark'}>
					<Card.Img variant="top" src={movie.ImagePath} />
					<Card.Body>
						<Card.Title>{movie.Title}</Card.Title>
						<Card.Text>{movie.Description}</Card.Text>
						<Button onClick={() => onClick(movie)} variant="link">
							Open
						</Button>
					</Card.Body>
				</Card>
			</Container>
		);
	}
}

MovieCard.PropTypes = {
	movie: PropTypes.shape({
		Title: PropTypes.string.isRequired,
		Description: PropTypes.string.isRequired,
		ImagePath: PropTypes.string.isRequired
	}).isRequired,
	onClick: PropTypes.func.isRequired
};
