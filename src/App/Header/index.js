import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import styles from './index.less';
import Item from './Item';

import store from '../store';

@withRouter
@observer
class Header extends Component {
  render() {
    const { subMenus } = store;
    const { location } = this.props;
    return (

      <div className={styles.container}>
        <div className={styles.history} />
        <div className={styles.subMenu}>
          {
            subMenus.map(menu => (
              <Item
                {...menu}
                active={location.pathname === menu.path}
              />
            ))
          }
        </div>
        <div className={styles.fixedContent}>fixed content</div>
      </div>
    );
  }
}

export default Header;
