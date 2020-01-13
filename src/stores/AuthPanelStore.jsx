import { observable, action } from 'mobx';

class AuthPanelStore {
    @observable closing;

    constructor(userInfoStore) {
        this.closing = false;
        this.userInfoStore = userInfoStore;
    }

    @action
    toggleClose(){
        this.closing = true;
    }
}

export default AuthPanelStore;
