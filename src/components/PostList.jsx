import ReactDOM from 'react-dom';
import React from 'react';
import { Pagination } from 'react-bootstrap';
import { observer } from "mobx-react";
import { withRouter, Redirect } from "react-router-dom";
import "../css/PostList.scss";
import PostItem from "./PostItem.jsx";
import PostItemStore from "../stores/PostItemStore.jsx";

@observer
class PostList extends React.Component {
    static defaultProps = { itemsOnPage: 3 }

    getPosts(){
        return [
            [4, "First", 0, "ddddddddasiogmearmepomhormhmaerh", new Date()],
            [3, "Title0", 123, "hggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg", new Date()],
            [2, "aen", 1, "ddddddddasiogmearmepomhormhmaerh", new Date()],
            [1, "Hello", -5, "ddddddd", new Date()],
            [0, "Lst", 60, "ddddddddasiogmearmepomhormhmaerh", new Date()]
        ];
    }

    changePage(e){
        this.props.store.setPage(e.target.text - 1);
    }

    render(){
        const store = this.props.store;
        const posts = this.getPosts();
        const max = this.props.itemsOnPage;

        const loc = this.props.location.pathname.split("/");
        if (loc[loc.length - 1] == "")
            return <Redirect to="/last"/>

        let items = [];
        for (let number = 1; number <= Math.ceil(posts.length/max); number++) {
            items.push(
                <Pagination.Item key={number} active={number === (store.page + 1)} bg="dark" variant="dark" onClick={(e)=>this.changePage(e)}>
                {number}
                </Pagination.Item>,
            );
        }

        return (
            <div className="postsWrapper">
                {
                    posts.slice(store.page*max, (posts.length < store.page*max + max ? posts.length : store.page*max + max)).map(function(value, index){
                        return <PostItem key={value[0]} store={ new PostItemStore().setAll(value[0], value[1], value[2], value[3], value[4]) }/>
                    })
                }
                <Pagination bg="dark" variant="dark" className="postsPagination">{items}</Pagination>
            </div>
        );
    }
}

export default withRouter(PostList);
