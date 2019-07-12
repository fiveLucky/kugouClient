import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Item from './Item';
import store from '../store';
import styles from './index.less';

const { Collapse } = Item;

const NO_COLLAPSE = ['default', 'mine-music'];

@observer
class Menu extends Component {
  componentDidMount() {
    store.fetchMenuTree();
  }

	onClickMenu = (data) => {
	  store.setStore({ activedMenuKey: data.path });
	}

	render() {
	  const { menuTree, activedMenuKey } = store;
	  return (
			<div className={styles.container}>
				{
					Object.keys(menuTree).map(category => (
						<Collapse
							key={category}
							label={menuTree[category].label}
							collapsable={!NO_COLLAPSE.includes(menuTree[category].value)}
						>
							{
								menuTree[category].menus.map(item => (
									<Item
										{...item}
										key={item.value}
										className={activedMenuKey === item.path ? styles.active : null}
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

export default Menu;
