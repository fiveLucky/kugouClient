import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
      <span className="margin-left-small">{label}</span>
      {
        unread
        && <span className={styles.unread} />
      }
    </Link>
  );
}

Item.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  className: PropTypes.string,
  path: PropTypes.string,
  label: PropTypes.string,
  unread: PropTypes.bool,
};

Item.defaultProps = {
  onClick: () => { },
  icon: '',
  className: '',
  path: '',
  label: '',
  unread: false,
};


function Collapse(props) {
  const [expand, setExpand] = useState(true);
  const { label, children, collapsable } = props;
  const click = () => setExpand(preExpand => !preExpand);

  return (
    <div className={styles.categoryBlock}>
      <div
        className={`${styles.category} ${collapsable ? styles.pointer : ''}`}
        onClick={collapsable ? click : undefined}
      >
        {
          label
          && (
            <div className={styles.icon}>
              {
                collapsable
                && <Icon name={expand ? 'downFill' : 'rightFill'} />
              }
            </div>
          )
        }
        <span>{label}</span>
      </div>
      <div>{expand && children}</div>
    </div>
  );
}
Collapse.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  collapsable: PropTypes.bool,
};

Collapse.defaultProps = {
  label: '',
  collapsable: false,
};


Item.Collapse = Collapse;
