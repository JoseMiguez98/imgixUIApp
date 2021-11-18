// @packages
import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import cn from 'classnames';

// @app
import Thumbnail from '../../atoms/Thumbnail';
import chunkArray from '../../../utils/chunkArray';

// @own
import './styles.scss';

const ImageCarrousel = ({
  activeImage,
  className,
  items,
  onThumbnailClick,
  pageSize,
}) => {
  const splittedItems = chunkArray(items, pageSize);

  return (
    <div className={cn('image-carrousel', className)}>
      <Carousel className="image-carrousel__carrousel" showIndicators={false}>
        {splittedItems.map((page, index) => (
          <div className="image-carrousel__page" key={index}>
            {page.map(({ name, url }, index) => (
              <Thumbnail
                className={cn(
                  'image-carrousel__thumbnail',
                  {'image-carrousel__thumbnail--selected': url === activeImage},
                )}
                key={`${name}${index}`}
                name={name}
                onClick={() => onThumbnailClick({name, url})}
                src={url}
              />
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

ImageCarrousel.defaultProps = {
  onThumbnailClick: () => {},
};

ImageCarrousel.propTypes = {
  activeImage: PropTypes.string,
  className: PropTypes.string,
  items: PropTypes.array,
  onThumbnailClick: PropTypes.func,
  pageSize: PropTypes.number,
};

export default ImageCarrousel;
