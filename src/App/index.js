import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Menu from './Menu';
import Mine from './Mine';
import Header from './Header';
import Content from './Content';

import styles from './index.less';

@withRouter
class Index extends Component {
  render() {
    return (
			<div className={styles.container}>
				<div className={styles.top}>
					<Header />
				</div>
				<div className={styles.left}>
					<Mine />
					<Menu />
				</div>
				<div className={styles.content}>
					<Content />
				</div>
			</div>
    );
  }
}

export default Index;
