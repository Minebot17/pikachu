import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/base.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

ReactDOM.render(
    <Router>
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">
                <img alt="" src="res/icon.png" width="40" height="40" className="d-inline-block align-top"/>
            </Navbar.Brand>
            <Navbar.Text>Pikachu</Navbar.Text>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="#link0">ГОРЯЧЕЕ</Nav.Link>
                    <Nav.Link href="#link1">ЛУЧШЕЕ</Nav.Link>
                    <Nav.Link href="#link2">СВЕЖЕЕ</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <ButtonGroup>
                    <Link to="/auth/login">Регатся</Link>
                    <Button variant="secondary" size="sm" href="./auth/login">Логин</Button>
                    <Button variant="secondary" size="sm">Регистрация</Button>
                </ButtonGroup>
            </Navbar.Collapse>
        </Navbar>
        <div class="grid">
            <div class="grid-left">gawgawg</div>
            <div class="grid-right"><p>gawgawg</p></div>
        </div>
    </Router>
    , document.getElementById("react")
);
