// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @own
import './styles.scss';

const Button = ({
  children,
  className,
  color,
  size,
  ...props
}) => (
  <button
    className={
      cn(
        'button',
        `button--size-${size}`,
        `button--color-${color}`,
        className
      )}
    {...props}
  >
    {children}
  </button>
);

Button.defaultProps = {
  size: 'medium',
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
};

export default Button;
