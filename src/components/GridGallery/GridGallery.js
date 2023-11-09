import React, { useState } from 'react';
import { gridGallery } from '../../assets/data/gridGallery';
import './grid-gallery.css';
import FsLightbox from 'fslightbox-react';

const GridGallery = () => {
  const [toggler, setToggler] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const handleClick = (e) => {
    setImgSrc(e.target.src);
    setToggler(!toggler);
  };

  return (
    <div className="grid-gallery-container">
      <h1 className="page-heading">Galérie</h1>
      <div className="grid-gallery">
        {gridGallery.map((img, index) => {
          return (
            <img
              key={index}
              src={img}
              alt={`item${index + 1}`}
              className={`item${index + 1}`}
              onClick={(e) => handleClick(e)}
            />
          );
        })}
        <FsLightbox toggler={toggler} sources={[imgSrc]} />
      </div>
    </div>
  );
};

export default GridGallery;
