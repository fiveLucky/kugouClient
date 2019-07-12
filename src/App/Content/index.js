import React, { Component } from 'react';

import styles from './index.less';


export default class Content extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        <div id="app-content-root">
          {children}
        </div>
      </div>
    );
  }
}
