import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/base.scss';
import { ButtonGroup, Button, Nav, Navbar, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import AuthPanelStore from './stores/AuthPanelStore.jsx';
import UserInfoStore from "./stores/UserInfoStore.jsx";

import AuthPanel from './components/AuthPanel.jsx';
import UserProfileLink from "./components/UserProfileLink.jsx";
const userInfoStore = new UserInfoStore();

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
                { !userInfoStore.login ?
                <ButtonGroup>
                    <LinkContainer to="/auth/login"><Button variant="secondary" size="sm">Логин</Button></LinkContainer>
                    <LinkContainer to="/auth/register"><Button variant="secondary" size="sm">Регистрация</Button></LinkContainer>
                </ButtonGroup>
                :
                <UserProfileLink store={userInfoStore}/>
                }
            </Navbar.Collapse>
        </Navbar>
        <div class="grid">
            <div class="grid-left">gawgawg</div>
            <div class="grid-right"><p>gawgawg</p></div>
        </div>
        <Switch>
            <Route path="/auth/">
                <AuthPanel store={new AuthPanelStore(userInfoStore)}/>
            </Route>
        </Switch>
    </Router>
    , document.getElementById("react")
);
