import React, { useContext } from 'react';
import { Col, Nav, NavItem, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<Row>
			<Col>
				<Nav variant="tabs" defaultActiveKey="/">
					<NavItem>
						<NavLink to="/">Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink to="/blog">Blog</NavLink>
					</NavItem>
				</Nav>
			</Col>
		</Row>
	);
}
