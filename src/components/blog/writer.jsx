import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, Container } from 'react-bootstrap';

class Writer extends React.Component {
	

	render() {
		return (
			<Container>
				<Form style={{padding: `${5}%`}}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Title</Form.Label>
						<Form.Control type="text" placeholder="Title" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Content</Form.Label>
						<Form.Control as="textarea" placeholder="Write something" style={{height: '200px'}} />
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		);
	}
}

export default Writer