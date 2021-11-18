// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @own
import './styles.scss';

const Select = ({
  className,
  onChange,
  options,
  selectedValue,
}) => (
  <select
    className={cn('select-input', className)}
    onChange={(e) => onChange(e.target.value)}
  >
    {options.map(({ name, value }, index) => (
      <option key={index} value={value} selected={value === selectedValue}>
        {name}
      </option>
    ))}
  </select>
);

Select.defaultProps = {
  options: [],
  onChange: () => {},
};

Select.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default Select;
