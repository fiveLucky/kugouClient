import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

import Item from './Item';
import store from '../store';
import styles from './index.less';


@withRouter
@observer
export default class Menu extends Component {
  componentDidMount() {
    store.fetchMenuTree();
  }

	onClickMenu = () => { }

	render() {
	  const { menuTree } = store;
	  return (
			<div className={styles.container}>
				<div className={styles.logoArea}>
					{/* <Icon type="github" className={styles.logoIcon} /> */}
				</div>
				{
					Object.keys(menuTree).map(category => (
						<div key={category}>
							<div>{menuTree[category].label}</div>
							{
								menuTree[category].menus.map(item => (
									<Item
										{...item}
										key={item.value}
										onClick={() => this.onClickMenu}
									/>
								))
							}
						</div>
					))
				}
			</div>
	  );
	}
}
