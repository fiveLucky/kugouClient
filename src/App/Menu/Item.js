import React from 'react';
import Icon from '$component/Icon';
import { Link } from 'react-router-dom';


export default function Item(props) {
  const { onClick, icon, className, path, label } = props;
  return (
    <div onClick={onClick}>
      <Icon name={icon} />
      <Link className={className} to={path}>{label}</Link>
    </div>
  );
}