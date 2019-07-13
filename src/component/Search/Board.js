
import React, { Component } from 'react';
import Card from '$component/Card';
import styles from './index.less';


class Board extends Component {
  render() {
    const { visible } = this.props;
    return (
      <div className={`${styles.board} ${visible ? styles.show : ''}`}>
        <Card />
      </div>
    );
  }
}

export default Board;
