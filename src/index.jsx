import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/base.scss';
import Button from 'react-bootstrap/Button';

ReactDOM.render(
    <div>
        <Button variant="primary">Primary</Button>
    </div>
    , document.getElementById("react")
);
