import { observable, action } from 'mobx';

class UserInfoStore {
    @observable login;

    @action
    setLogin(login){
        this.login = login;
    }
}

export default UserInfoStore;
