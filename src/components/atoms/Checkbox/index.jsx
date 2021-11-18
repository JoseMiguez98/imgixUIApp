// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Checkbox = ({
  checked,
  className,
  onChange,
}) => (
  <input
    checked={checked}
    className={cn('checkbox', className)}
    onChange={e => onChange(e.target.checked)}
    type="checkbox"
  />
);

Checkbox.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
}

export default Checkbox;
