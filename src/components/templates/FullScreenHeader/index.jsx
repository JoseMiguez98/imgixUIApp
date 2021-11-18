// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @own
import './styles.scss';

const FullScreenHeader = ({ className, children }) => (
  <div className={cn('fullscreen-header', className)}>
    {children}
  </div>
);

FullScreenHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default FullScreenHeader;
