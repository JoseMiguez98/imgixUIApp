// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @app
import FiltersSection from '../../molecules/FiltersSection';

// @own
import './styles.scss';

const Filters = ({
  className,
  sections,
}) => (
  <div className={cn('filters', className)}>
    {sections.map((section, index) => (
      <FiltersSection
        className="filters__section"
        filters={section.filters}
        key={index}
        title={section.title}
      />
    ))}
  </div>
);

Filters.defaultProps = {
  sections: [],
};

Filters.propTypes = {
  className: PropTypes.string,
  sections: PropTypes.array,
};

export default Filters;
