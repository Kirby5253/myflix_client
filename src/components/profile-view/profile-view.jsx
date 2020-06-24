import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './profile-view.scss';

export function ProfileView(props) {
  const { user } = this.props;
  
	return (
		<div className="profile-view">
				<div className="username">
					<span className="label">Username: </span>
					<span className="value">{user.Username}</span>
				</div>
				<div className="user-email">
					<span className="label">Email: </span>
					<span className="value">{user.Email}</span>
				</div>			
		</div>
	);
}