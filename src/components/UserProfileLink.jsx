import React from 'react';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";

@observer
class UserProfileLink extends React.Component {
    render(){
        const store = this.props.store;
        return (
            <Navbar.Text>Вы вошли как: <LinkContainer to="/auth/register">{store.login}</LinkContainer></Navbar.Text>
        );
    }
}

export default withRouter(UserProfileLink);
