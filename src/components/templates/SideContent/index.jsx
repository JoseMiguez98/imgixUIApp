// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @own
import './styles.scss';

const SideContent = ({ className, children }) => (
  <div className={cn('side-content', className)}>
    {children}
  </div>
);

SideContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SideContent;
