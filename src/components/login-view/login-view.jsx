import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function LoginView(props) {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');

	// Has ability to login with random credentials for existing user, no functionality for new users yet
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(username, password);
		// Send a request to the server for authentication then call props.onLoggedIn(username)
		props.onLoggedIn(username);
	};

	const createAccount = (e) => {
		e.preventDefault();
		console.log('new user');
		// Send a request to the server for authentication then call props.onLoggedIn(username)
		props.onLoggedIn();
		props.createUser();
	};

	return (
		<div className="login-form">
			<Form>
				<Form.Label>
					<h3>Login to MyFlix</h3>
				</Form.Label>
				<Form.Group controlId="formBasicUsername">
					<Form.Label>Username:</Form.Label>
					<Form.Control
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<br />
				<Button variant="dark" className="login-button" type="button" onClick={handleSubmit}>
					Login
				</Button>
				{/* This currently has the same functionality as the submit button */}
				<Button variant="dark" className="login-button" type="button" onClick={createAccount}>
					Create Account
				</Button>
				<br />
			</Form>
		</div>
	);
}

LoginView.propTypes = {
	setUsername: PropTypes.string,
	setPassword: PropTypes.string
};
