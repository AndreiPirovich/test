import React, {FC} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type LazyImageProps = {
  alt: string;
  src: string;
  className?: string;
};

export const LazyImage: FC<LazyImageProps> = React.memo(({
  alt,
  src,
  className,
}) => {
  return (
    <LazyLoadImage
      className={className}
      alt={alt}
      effect="blur"
      src={src} />
  );
});
