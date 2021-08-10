import React, { useContext } from 'react';
import { Navbar, Nav, NavItem, Row, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<Navbar collapseOnSelect expand="lg" variant="light">
			<Container>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav variant="tabs" defaultActiveKey="/" className="mr-auto">
						<NavItem>
							<Nav.Link>
								<NavLink to="/">Home</NavLink>
							</Nav.Link>
						</NavItem>
						<NavItem>
							<Nav.Link>
								<NavLink to="/blog">Blog</NavLink>
							</Nav.Link>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
