import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.less';


export default class Content extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

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
