import React, { Component } from 'react';

import styles from '../index.less';


export default class Content extends Component {
  render() {
    const { children } = this.props;
    return (
			<div className={styles.contentContainer}>
				<div className={styles.contentBody} id="app-content-root">
					{children}
				</div>
			</div>
    );
  }
}
