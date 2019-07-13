import { observable, action } from 'mobx';


class Store {
  @observable value = '';

  @observable focus = false;


  @action.bound
  setStore(value = {}) {
    Object.assign(this, value);
  }

  onInput = (e) => {
    const { value } = e.target;
    this.setStore({ value });
  }

  toggle = () => {
    this.setStore({ focus: !this.focus });
  }

  clear = () => {
    this.setStore({ value: '' });
  }
}


export default Store;
