// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @own
import './styles.scss';

const MainContent = ({ className, children }) => (
  <div className={cn('main-content', className)}>
    {children}
  </div>
);

MainContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default MainContent;
