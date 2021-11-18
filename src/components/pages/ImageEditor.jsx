// @packages
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Slider, { Handle, SliderTooltip } from 'rc-slider';
import Loader from 'react-loader-spinner';

// @app
import FullScreenHeader from '../templates/FullScreenHeader';
import MainContent from '../templates/MainContent';
import SideContent from '../templates/SideContent';
import ActionsList from '../molecules/ActionsList';
import ImgixWrapper from '../molecules/ImgixWrapper';
import ImageCarrousel from '../molecules/ImageCarrousel';
import Select from '../atoms/Select';
import Checkbox from '../atoms/Checkbox';
import Filters from '../organisms/Filters';
import {
  cleanImageFilter,
  getImages,
  redoFilter,
  setFilterHistory,
  setImageFilter,
  undoFilter,
} from '../services/ImageEditor/actions';
import {
  selectFiltersHistory,
  selectHistoryIndex,
  selectImageFilters,
  selectImages,
  selectImagesLoading,
} from '../services/ImageEditor/selectors';
import ImgixLogo from '../../assets/imgix.svg';

// @own
import './styles.scss';

const defaultImage = {
  url: 'https://assets.imgix.net/unsplash/alarmclock.jpg',
  name: 'alarmclock.jpg',
};

const ImageEditor = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectImageFilters);
  const historyIndex = useSelector(selectHistoryIndex);
  const filtersHistory = useSelector(selectFiltersHistory);
  const images = useSelector(selectImages);
  const loadingImages = useSelector(selectImagesLoading);
  const [selectedImage, setSelectedImage] = useState(images[0] || defaultImage);
  const handle = props => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };
  const sections = [
    {
      title: 'rotation',
      filters: [
        {
          label: 'Flip axis',
          name: 'flip',
          component: Select,
          value: filters?.flip,
          options: [
            {
              name: 'h',
              value: 'h',
            },
            {
              name: 'v',
              value: 'v',
            },
            {
              name: 'hv',
              value: 'hv',
            },
          ],
          onChange: (n, v) => handleFilterChange(n, v),
        },
        {
          label: 'Orientation',
          name: 'orient',
          component: Select,
          value: filters?.orient,
          options: [
            {
              name: '1',
              value: 1,
            },
            {
              name: '2',
              value: 2,
            },
            {
              name: '3',
              value: 3,
            },
            {
              name: '4',
              value: 4,
            },
            {
              name: '5',
              value: 5,
            },
            {
              name: '6',
              value: 6,
            },
            {
              name: '7',
              value: 7,
            },
            {
              name: '8',
              value: 8,
            },
            {
              name: '90',
              value: 90,
            },
            {
              name: '180',
              value: 180,
            },
            {
              name: '270',
              value: 270,
            },
          ],
          onChange: (n, v) => handleFilterChange(n, v),
        },
        {
          component: Slider,
          handle,
          label: 'Rotation',
          marks: {0: 0, 360: 360},
          max: 360,
          min: 0,
          name: 'rot',
          onChange: (n, v) => handleFilterChange(n, v),
          onAfterChange: handleAddHistory,
          value: filters?.rot,
          defaultValue: 0,
        },
      ],
    },
    {
      title: 'adjustment',
      filters: [
        {
          component: Slider,
          handle,
          label: 'brightness',
          marks: {[-100]: -100, 100: 100},
          max: 100,
          min: -100,
          name: 'bri',
          startPoint: 0,
          onChange: (n, v) => handleFilterChange(n, v),
          onAfterChange: handleAddHistory,
          defaultValue: 0,
          value: filters?.bri,

        },
        {
          component: Slider,
          handle,
          label: 'Contrast',
          marks: {[-100]: -100, 100: 100},
          max: 100,
          min: -100,
          name: 'con',
          onChange: (n, v) => handleFilterChange(n, v),
          onAfterChange: handleAddHistory,
          startPoint: 0,
          defaultValue: 0,
          value: filters?.con,
        },
        {
          component: Slider,
          handle,
          label: 'Exposure',
          marks: {[-100]: -100, 100: 100},
          max: 100,
          min: -100,
          name: 'exp',
          onChange: (n, v) => handleFilterChange(n, v),
          onAfterChange: handleAddHistory,
          startPoint: 0,
          defaultValue: 0,
          value: filters?.exp,
        },
        {
          component: Slider,
          handle,
          label: 'Gamma',
          marks: {[-100]: -100, 100: 100},
          max: 100,
          min: -100,
          name: 'gam',
          onChange: (n, v) => handleFilterChange(n, v),
          onAfterChange: handleAddHistory,
          startPoint: 0,
          defaultValue: 0,
          value: filters?.gam,
        },
        {
          component: Slider,
          handle,
          label: 'Highlight',
          marks: {[-100]: -100, 0: 0},
          max: 0,
          min: -100,
          name: 'high',
          onChange: (n, v) => handleFilterChange(n, v),
          onAfterChange: handleAddHistory,
          startPoint: 0,
          defaultValue: 0,
          value: filters?.high,
        },
        {
          component: Slider,
          handle,
          label: 'Hue shift',
          marks: {0: 0, 360: 360},
          max: 360,
          min: 0,
          name: 'hue',
          onChange: (n, v) => handleFilterChange(n, v),
          onAfterChange: handleAddHistory,
          startPoint: 0,
          defaultValue: 0,
          value: filters?.hue,
        },
        {
          checked: filters?.invert,
          component: Checkbox,
          label: 'Invert',
          name: 'invert',
          onChange: (n, v) => handleFilterChange(n, v),
        },
        {
          component: Slider,
          handle,
          label: 'Saturation',
          marks: {[-100]: -100, 100: 100},
          max: 100,
          min: -100,
          name: 'sat',
          onChange: (n, v) => handleFilterChange(n, v),
          onAfterChange: handleAddHistory,
          startPoint: 0,
          defaultValue: 0,
          value: filters?.sat,
        },
        {
          component: Slider,
          handle,
          label: 'Shadow',
          marks: {0: 0, 100: 100},
          max: 100,
          min: 0,
          name: 'shad',
          onChange: (n, v) => handleFilterChange(n, v),
          onAfterChange: handleAddHistory,
          startPoint: 0,
          defaultValue: 0,
          value: filters?.shad,
        },
        {
          component: Slider,
          handle,
          label: 'Sharpen',
          marks: {0: 0, 100: 100},
          max: 100,
          min: 0,
          name: 'sharp',
          onChange: (n, v) => handleFilterChange(n, v),
          onAfterChange: handleAddHistory,
          startPoint: 0,
          defaultValue: 0,
          value: filters?.sharp,
        },
        {
          component: Slider,
          handle,
          label: 'Unsharp Mask',
          marks: {[-100]: -100, 100: 100},
          max: 100,
          min: -100,
          name: 'usm',
          onChange: (n, v) => handleFilterChange(n, v),
          onAfterChange: handleAddHistory,
          startPoint: 0,
          defaultValue: 0,
          value: filters?.usm,
        },
        {
          component: Slider,
          handle,
          label: 'Unsharp Mask Radius',
          marks: {0: 0, 500: 500},
          max: 500,
          min: 0,
          name: 'usmrad',
          onChange: (n, v) => handleFilterChange(n, v),
          onAfterChange: handleAddHistory,
          startPoint: 0,
          defaultValue: 0,
          value: filters?.usmrad,
        },
      ],
    },
  ];

  const actions = [
    {
      name: 'import',
      onClick: () => console.log('import'),
    },
    {
      name: 'save',
      onClick: () => console.log('save'),
    },
    {
      name: 'save as',
      onClick: () => console.log('save as'),
      disabled: true,
    },
  ];

  const imageActions = [
    {
      name: 'clean',
      onClick: () => dispatch(cleanImageFilter()),
    },
    {
      name: 'undo',
      onClick: () => dispatch(undoFilter()),
      disabled: historyIndex <= 0,
    },
    {
      name: 'redo',
      onClick: () => dispatch(redoFilter()),
      disabled: historyIndex >= filtersHistory.length - 1,
    },
  ];

  function handleThumbnailClick(img) {
    dispatch(cleanImageFilter());
    setSelectedImage(img);
  };

  function handleFilterChange(name, value) {
    if(filters[name] !== value) {
      dispatch(setImageFilter({ name, value }));
    }
  };

  function handleAddHistory() {
    dispatch(setFilterHistory(filters));
  }

  useEffect(() => {
    dispatch(getImages());
  }, []);

  return (
    <div className="image-editor">
      <FullScreenHeader className="image-editor__header">
        <img className="image-editor__logo" src={ImgixLogo} />
      </FullScreenHeader>
      <MainContent className="image-editor__main-content">
        {!loadingImages && images.length ? (
          <>
            <ImgixWrapper {...selectedImage} filters={filters}/>
            <ActionsList
              actions={imageActions}
              actionsClassName="image-editor__image-actions-button"
              className="image-editor__image-actions-list"
            />
            <ImageCarrousel
              activeImage={selectedImage.url}
              items={images}
              onThumbnailClick={handleThumbnailClick}
              pageSize={5}
            />
          </>
        ) : (
          loadingImages ? (
            <Loader
              className="image-editor__loader"
              type="Oval"
              color="#a5d6a7"
              height={100}
              width={100}
              timeout={3000}
            />
          ) : (
            <span>There was an error loading images</span>
          )
        )}
      </MainContent>
      <SideContent className="image-editor__side-content">
        <Filters sections={sections}/>
      </SideContent>
    </div>
  );
};

export default ImageEditor;
