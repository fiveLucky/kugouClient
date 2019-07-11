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

	onClickMenu = (data) => {
	  store.setState({ activedMenuKey: data.value });
	}

	render() {
	  const { menuTree, activedMenuKey } = store;
	  return (
			<div className={styles.container}>
				<div className={styles.logoArea} />
				{
					Object.keys(menuTree).map(category => (
						<div key={category}>
							<div>{menuTree[category].label}</div>
							{
								menuTree[category].menus.map(item => (
									<Item
										{...item}
										key={item.value}
										className={activedMenuKey === item.value ? styles.active : null}
										onClick={() => this.onClickMenu(item)}
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
