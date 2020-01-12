import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/base.scss';
import { ButtonGroup, Button, Nav, Navbar, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function setTimeLine(key){
    switch (key) {
        case "hot":
            console.log("hot");
            break;
        case "best":
            console.log("best");
            break;
        case "last":
            console.log("last");
            break;
    }
}

ReactDOM.render(
    <Router>
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">
                <img alt="" src="./res/icon.png" width="40" height="40" className="d-inline-block align-top"/>
            </Navbar.Brand>
            <Navbar.Text>Pikachu</Navbar.Text>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Nav onSelect={setTimeLine}>
                    <Nav.Link eventKey="hot">ГОРЯЧЕЕ</Nav.Link>
                    <Nav.Link eventKey="best">ЛУЧШЕЕ</Nav.Link>
                    <Nav.Link eventKey="last">СВЕЖЕЕ</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <ButtonGroup>
                    <LinkContainer to="/auth/login"><Button variant="secondary" size="sm">Логин</Button></LinkContainer>
                    <LinkContainer to="/auth/register"><Button variant="secondary" size="sm">Регистрация</Button></LinkContainer>
                </ButtonGroup>
            </Navbar.Collapse>
        </Navbar>
        <div class="grid">
            <div class="grid-left">gawgawg</div>
            <div class="grid-right"><p>gawgawg</p></div>
        </div>
        <Switch>
            <Route path="/auth/">
                <div class="auth-background">
                    <div class="auth-panel">
                        <div class="auth-form">
                            <Form>
                                <Form.Group>
                                    <Form.Label class="white-label">Login</Form.Label>
                                    <Form.Control type="text" placeholder="Enter login"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label class="white-label">Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label class="white-label">Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Form.Group>
                                <Button variant="secondary" type="submit">
                                    Подтвердить
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Route>
        </Switch>
    </Router>
    , document.getElementById("react")
);
