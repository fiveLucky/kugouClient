import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '$component/Icon';
import styles from './index.less';


export default function Item(props) {
  const {
    onClick, icon, className = '', path, label, unread = false,
  } = props;
  return (
    <Link
      onClick={onClick}
      className={`${styles.itemContainer} ${className}`}
      to={path}
    >
      <Icon name={icon} />
      <span>{label}</span>
      {
        unread
        && <span className={styles.unread} />
      }
    </Link>
  );
}


function Collapse(props) {
  const { label, expand = true, children } = props;
  return (
    <div className={styles.categoryBlock}>
      <div className={styles.category}>
        <Icon name={expand ? '' : 'sss'} />
        <span>{label}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}


Item.Collapse = Collapse;
