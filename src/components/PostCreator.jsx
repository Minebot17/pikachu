import ReactDOM from 'react-dom';
import React from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
//import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import "../css/PostCreator.scss";

//@observer
class PostCreator extends React.Component {

    constructor(props){
        super(props);
        this.state = { clicked: false };
    }

    sumbitClick(){
        this.setState({ clicked: true });
    }

    handleSubmit(e){
        e.preventDefault();

        const xhr = new XMLHttpRequest();
        xhr.open("POST", '/api/post/add', true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function() {
            if(xhr.readyState == XMLHttpRequest.DONE && xhr.status === 200){
                // TODO
                this.props.history.push("/last");
            }
        }.bind(this);
        xhr.send(JSON.stringify({ "title": this.title, "text": this.text }));
    }

    render(){
        const store = this.props.store;
        return (
            <div className="creatorPanel">
                <Form onSubmit={(e)=>this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label className="white-label">Заголовок</Form.Label>
                        <Form.Control type="text" placeholder="Введите заголовок" onChange={(title)=>{ this.title = title.target.value }} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="white-label">Текст поста</Form.Label>
                        <Form.Control as="textarea" rows="5" placeholder="Бла-бла-бла" onChange={(text)=>{ this.text = text.target.value }} />
                    </Form.Group>
                    { this.state.clicked ?
                        <Button variant="secondary" type="submit" onClick={(e)=>this.sumbitClick(e)}>
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                             Загрузка...
                        </Button>
                    :
                        <Button variant="secondary" type="submit" onClick={(e)=>this.sumbitClick(e)}>
                            Подтвердить
                        </Button>
                    }
                </Form>
            </div>
        );
    }
}

export default withRouter(PostCreator);
