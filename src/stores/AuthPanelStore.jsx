import { observable, action } from 'mobx';

class AuthPanelStore {
    @observable closing;

    constructor() {
        this.closing = false;
    }

    @action
    toggleClose(){
        this.closing = true;
    }
}

export default AuthPanelStore;
