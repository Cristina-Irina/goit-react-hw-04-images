import React, { useCallback } from 'react';
import { GalleryItem, ImageStyle } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, toggleModal }) => {
  const handleImageClick = useCallback(
    (largeImageURL, tags) => {
      toggleModal(largeImageURL, tags);
    },
    [toggleModal]
  );

  return images.map(image => (
    <GalleryItem
      key={image.id}
      onClick={() => handleImageClick(image.largeImageURL, image.tags)}
    >
      <ImageStyle
        src={image.webformatURL}
        alt={image.tags || 'image description'}
        loading="lazy"
      />
    </GalleryItem>
  ));
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleModal: PropTypes.func.isRequired,
};
