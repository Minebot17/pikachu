import ReactDOM from 'react-dom';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import "../css/AuthPanel.scss";

@observer
class AuthPanel extends React.Component {

    sumbitClick(){
        if (this.clicked){
            this.clicked = false;
            return;
        }

        this.props.store.toggleClose();
        setTimeout(()=>{
            this.props.history.push("/");
            this.props.store.closing = false;
        }, 500);
    }

    handleSubmit(e){
        e.preventDefault();

        const xhr = new XMLHttpRequest();
        xhr.open("POST", this.isLogin ? '/auth/login' : '/auth/register', true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            console.log(xhr.readyState);
            console.log(xhr.response);
            if(xhr.readyState == XMLHttpRequest.DONE && xhr.responseText === "true"){
                this.props.store.userInfoStore.setLogin(this.login);
            }
        }
        console.log(this.email);
        console.log(this.login);
        console.log(`\"${this.password}\"`);
        var body = 'login=' + encodeURIComponent(this.login) + '&email=' + encodeURIComponent(this.email) + '&password=' + encodeURIComponent(this.password);
        xhr.send(body);
    }

    cancelClick(){
        this.clicked = true;
    }

    render(){
        const store = this.props.store;
        if (store.userInfoStore.login){
            this.sumbitClick();
            return null;
        }

        const path = this.props.location.pathname.split("/");
        const loc = path[path.length-1];
        if (loc === "login")
            this.isLogin = true;
        else if (loc === "register")
            this.isLogin = false;
        else {
            this.sumbitClick();
            return null;
        }

        return (
            <div class={"auth-background" + (store.closing ? " auth-background-closing" : "")} onClick={()=>this.sumbitClick()}>
                <div class={"auth-panel" + (store.closing ? " auth-panel-closing" : "")} onClick={()=>this.cancelClick()}>
                    <div class={"auth-form" + (this.isLogin ? " auth-login" : " auth-register")}>
                        <Form onSubmit={(e)=>this.handleSubmit(e)}>
                            <Form.Group>
                                <Form.Label class="white-label">Логин</Form.Label>
                                <Form.Control type="text" placeholder="Введите логин" onChange={(login)=>{ this.login = login.target.value }} />
                            </Form.Group>
                            {!this.isLogin ? <Form.Group>
                                <Form.Label class="white-label">Email</Form.Label>
                                <Form.Control type="text" placeholder="Ввердите email" onChange={(email)=>{ this.email = email.target.value }} />
                            </Form.Group> : null}
                            <Form.Group>
                                <Form.Label class="white-label">Пароль</Form.Label>
                                <Form.Control type="password" placeholder="Введите пароль" onChange={(password)=>{ this.password = password.target.value }} />
                            </Form.Group>
                            <Button variant="secondary" type="submit" onClick={(e)=>this.sumbitClick(e)}>
                                Подтвердить
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AuthPanel);
