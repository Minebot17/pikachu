import { observable, action } from 'mobx';

class PostListStore {
    @observable page;

    constructor() {
        this.page = false;
    }

    @action
    setPage(page){
        this.page = page;
    }
}

export default PostListStore;
