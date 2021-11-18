// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Thumbnail = ({
  className,
  name,
  onClick,
  src,
}) => (
  <div
    className={cn('thumbnail', className)}
    onClick={onClick}
    style={{cursor: onClick ? 'pointer' : null}}
    title={name}
  >
    <img className="thumbnail__image" src={src} />
  </div>
);

Thumbnail.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  onClick: PropTypes.func,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
}

export default Thumbnail;
