import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import styles from './index.less';

function Item(props) {
  const { path, label, active } = props;
  return (
    <Link
      className={`${styles.item} ${active ? styles.active : ''}`}
      to={path}
    >
      {label}
    </Link>
  );
}


Item.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool,
};

Item.defaultProps = {
  path: '',
  label: '',
  active: false,
};

export default Item;
