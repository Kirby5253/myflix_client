import React, { useState } from 'react';
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

	return (
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
			<Button className="login-button" type="button" onClick={handleSubmit}>
				Login
			</Button>
			{/* This currently has the same functionality as the submit button */}
			<Button className="login-button" type="button" onClick={handleSubmit}>
				Create Account
			</Button>
			<br />
			<Button className="login-button" type="button" onClick={handleSubmit}>
				Forgot Password
			</Button>
		</Form>
	);
}
