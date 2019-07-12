import React, { Component } from 'react';


import styles from './index.less';


export default class Index extends Component {
  render() {
    const { name = '卢本伟' } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.avatar}>花</div>
        <div className={styles.name}>{name}</div>
      </div>
    );
  }
}
