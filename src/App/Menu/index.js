import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';

import Item from './Item';
import store from '../store';
import styles from './index.less';

const { Collapse } = Item;

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
				{
					Object.keys(menuTree).map(category => (
						<Collapse key={category} label={menuTree[category].label}>
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
						</Collapse>
					))
				}
			</div>
	  );
	}
}
