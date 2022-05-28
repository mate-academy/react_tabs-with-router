import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Navbar bg="primary" variant="light">
        <Container className="me-auto">
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="link" to="/">Home Page</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to="/tabs">Tabs Page</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>

  );
};
