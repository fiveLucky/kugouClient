import React, { Component } from 'react';
import Store from './store';
import styles from './index.less';

class FixedContent extends Component {
  constructor(props) {
    super(props);
    this.store = new Store();
  }

  render() {
    const { onInput, value } = this.store;
    return (
      <div className={styles.container}>
        <input
          value={value}
          type="text"
          onChange={onInput}
          className={styles.input}
        />
      </div>
    );
  }
}


export default FixedContent;
