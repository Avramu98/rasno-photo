import React from 'react';
import Image from 'next/image';
import 'yet-another-react-lightbox/styles.css';


const LightboxNextJsImage = (image:any, offset:any, rect:any) => {
  const width = Math.round(
    Math.min(rect.width, (rect.height / image.height) * image.width),
  );
  const height = Math.round(
    Math.min(rect.height, (rect.width / image.width) * image.height),
  );

  return (
        <div style={{ position: 'relative', width, height }}>
            <Image
                fill
                alt=""
                src={image}
                loading="eager"
                // placeholder="blur"
                draggable={false}
                sizes={
                    typeof window !== 'undefined'
                      ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                      : `${width}px`
                }
            />
        </div>
  );
};

export default LightboxNextJsImage;