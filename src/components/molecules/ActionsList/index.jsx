// @package
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// @app
import Button from '../../atoms/Button';

// @own
import './styles.scss';

const ActionsList = ({ actions, actionsClassName, className }) => (
  <div className={cn('actions-list', className)}>
    {actions.map(({name, ...rest}, key) => (
      <Button
        key={`action${key}`}
        className={cn('actions-list__button', actionsClassName)}
        size="large"
        color ="primary"
        {...rest}
      >
        {name}
      </Button>
    ))}
  </div>
);

ActionsList.propTypes = {
  actions: PropTypes.array,
  actionsClassName: PropTypes.string,
  className: PropTypes.string,
};

export default ActionsList;
