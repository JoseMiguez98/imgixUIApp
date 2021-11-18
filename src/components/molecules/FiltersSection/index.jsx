// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @own
import './styles.scss';

const FiltersSection = ({
  className,
  title,
  filters,
}) => (
  <div className={cn('filters-section', className)}>
    <div className="filters-section__title">{ title }</div>
    {filters.map(({
      component: Component,
      label,
      name,
      onChange,
      onAfterChange,
      ...props
    }, index) => (
      <div className="filters-section__filter" key={index}>
        <span className="filters-section__filter-label">{ label }</span>
        <Component
          className="filters-section__filter-input"
          onChange={value => onChange && onChange(name, value)}
          onAfterChange={value => onAfterChange && onAfterChange(name, value)}
          {...props}
        />
      </div>
    ))}
  </div>
);

FiltersSection.defaultProps = {
  filters: [],
};

FiltersSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  filters: PropTypes.array,
}

export default FiltersSection;
