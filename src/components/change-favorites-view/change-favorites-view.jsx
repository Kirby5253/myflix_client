import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './change-favorites.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class ChangeFavorites extends React.Component {
	render() {
		const { user, movie, onDelete } = this.props;
		const token = localStorage.getItem('token');

		const handleAddFavorite = (e) => {
			axios
				.post(`https://myflixdb5253.herokuapp.com/users/${user.Username}/Movies/${movie._id}`, {
					headers: { Authorization: `Bearer ${token}` }
				})
				.then((response) => {
					const data = response.data;
					console.log(data);
				})
				.catch((e) => {
					console.log(e);
				});
		};

		const handleRemoveFavorite = (e) => {
			axios
				.put(`https://myflixdb5253.herokuapp.com/users/${user.Username}/Movies/${movie._id}`, {
					headers: { Authorization: `Bearer ${token}` }
				})
				.then((response) => {
					const data = response.data;
					console.log(data);
				})
				.catch((e) => {
					console.log(e);
				});
		};

		return (
			<div className="remove-favorite">
				<h1>Select the movies to remove from favorites</h1>
			</div>
		);
	}
}
