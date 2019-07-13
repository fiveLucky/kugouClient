import React, { Component } from 'react';

import Search from '$component/Search';
import styles from './index.less';


class FixedContent extends Component {
  render() {
    return (
      <div className={styles.fixedContent}>
        <Search />
      </div>
    );
  }
}


export default FixedContent;
