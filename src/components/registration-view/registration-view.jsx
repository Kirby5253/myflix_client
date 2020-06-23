import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

export function RegistrationView(props) {
	const [ newUsername, setNewUsername ] = useState('');
	const [ newPassword, setNewPassword ] = useState('');
	const [ newEmail, setNewEmail ] = useState('');
	const [ newBirthDate, setNewBirthDate ] = useState('');

	// Has ability to login with random credentials for existing user, no functionality for new users yet
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(newUsername, newPassword, newEmail, newBirthDate);
		// Send a request to the server for authentication then call props.onLoggedIn(username)
		props.onLoggedIn(newUsername);
	};

	return (
		<div className="login-form">
			<Form>
				<Form.Label>
					<h3>Create New User for MyFlix</h3>
				</Form.Label>

				<Form.Group controlId="formBasicUsername">
					<Form.Label>Create Username:</Form.Label>
					<Form.Control
						type="text"
						placeholder="Username"
						value={newUsername}
						onChange={(e) => setNewUsername(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Create Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="Email"
						value={newEmail}
						onChange={(e) => setNewEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Date of Birth</Form.Label>
					<Form.Control
						type="text"
						placeholder="YYYY-MM-DD"
						value={newBirthDate}
						onChange={(e) => setNewBirthDate(e.target.value)}
					/>
				</Form.Group>

				<Button variant="dark" type="button" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</div>
	);
}

RegistrationView.propTypes = {
	setNewUsername: PropTypes.string,
	setNewPassword: PropTypes.string
};
