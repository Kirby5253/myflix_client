import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './profile-view.scss';
import { Link } from "react-router-dom";

export class ProfileView extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	
	render () {
	const { user } = this.props;

	if (!user) return null;

	console.log(user);
  
	return (
		<div className="profile-view">
				<div className="username">
					<span className="profile-label">Username: </span>
					<span className="value">{user.Username}</span>
				</div>
				<div className="user-email">
					<span className="profile-label">Email: </span>
					<span className="value">{user.Email}</span>
				</div>
				<div className="button-nav">
					<ul>
						<li><Button variant="dark">View Favorites</Button></li>
						<li><Button variant="dark">Update Account</Button></li>
						<li><Button variant="dark">Delete Account</Button></li>
					</ul>
				</div>			
		</div>
	);
	}
}
