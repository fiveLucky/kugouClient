import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Icon from '../Icon';
import Board from './Board';
import Store from './store';
import styles from './index.less';


@observer
class FixedContent extends Component {
  constructor(props) {
    super(props);
    this.store = new Store();
  }

  render() {
    const {
      onInput, value, toggle, focus, clear,
    } = this.store;
    return (
      <div className={styles.container}>
        <Icon name="search" className={styles.icon} />
        {
          !focus && !value
            ? <span className={styles.placeholder}>搜索</span> : null
        }
        <input
          value={value}
          type="text"
          onChange={onInput}
          className={styles.input}
          onFocus={toggle}
          onBlur={toggle}
        />
        {
          value
          && <Icon className={styles.clearBtn} name="add" onClick={clear} />
        }
        <Board visible={focus} />
      </div>
    );
  }
}


export default FixedContent;
