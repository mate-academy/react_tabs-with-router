import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Navbar bg="primary" variant="light">
        <Container>
          <Nav>
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
