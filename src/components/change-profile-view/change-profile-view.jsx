import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export function ChangeProfile(props) {
	const [ newUsername, setNewUsername ] = useState('');
	const [ newPassword, setNewPassword ] = useState('');
	const [ newEmail, setNewEmail ] = useState('');
	const [ newBirthDate, setNewBirthDate ] = useState('');

	if (!user) return null;

	const handleProfileUpdate = (e) => {
		e.preventDefault();
		/* Send a request to the server for authentication */
		axios
			.put('https://myflixdb5253.herokuapp.com/users/', {
				Username: newUsername,
				Password: newPassword,
				Email: newEmail,
				Birth_Date: newBirthDate
			})
			.then((response) => {
				const data = response.data;
				console.log(data);
				window.open(`/profile/${newUsername}`, '_self'); // Self to open in the current window
			})
			.catch((e) => {
				console.log('error updating the user');
				console.log(e);
			});
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
						required
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Create Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
						required
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

				<Button variant="dark" type="button" onClick={handleProfileUpdate}>
					Register
				</Button>
			</Form>
		</div>
	);
}