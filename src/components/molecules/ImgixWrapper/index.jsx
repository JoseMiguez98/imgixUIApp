// @packages
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Imgix from 'react-imgix';

// @own
import './styles.scss'

const ImgixWrapper = ({
  className,
  filters,
  name,
  url,
}) => (
  <div className={cn('imgix-wrapper', className)}>
    <div className="imgix-wrapper__title">
      {name}
    </div>
    <Imgix
      className="image-editor__imgix"
      height={600}
      imgixParams={filters}
      src={url}
      width={1024}
    />
  </div>
);

ImgixWrapper.defaultProps = {
  filters: {},
};

ImgixWrapper.propTypes = {
  className: PropTypes.string,
  filters: PropTypes.object,
  name: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default ImgixWrapper;
