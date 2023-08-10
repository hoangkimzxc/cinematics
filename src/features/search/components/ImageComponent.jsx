import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ImageComponent({ src, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return (
    <LazyLoadImage
      className={`${className} h-full`}
      effect={isLoaded ? "none" : "blur"}
      src={src}
      onLoad={handleImageLoad}
    />
  );
}

export default ImageComponent;
