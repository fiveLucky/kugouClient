import React, { Component } from 'react';

import Menu from './Menu';
import Header from './Header';
import Content from './Content';

import styles from './index.less';

export default class Index extends Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.top}>
					<Header />
				</div>
				<div className={styles.left}>
					<Menu />
				</div>
				<div className={styles.content}>
					<Content />
				</div>
			</div>
		);
	}
}


