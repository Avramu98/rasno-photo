import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/legacy/image';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';

import { PictureI } from 'types/misc';

const ResponsiveGallery = ({ pictures }:any) => {
  const [selectedPictureId, setSelectedPictureId] = useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleClickedPicture = (selectedId: string) => {
    setSelectedPictureId(selectedId);
    setOpen(true);
  };

  const configuredArr = pictures?.map((item: PictureI) => {
    return {
      src: item.imageUrl,
    };
  });

  return (
        <>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 360: 1, 750: 2, 900: 3 }}
            >
                <Masonry style={{ overflow: 'hidden' }} columnsCount={3} gutter='10px'>
                    {pictures?.map((picture: PictureI, itemKey: string) => {
                      return (
                                <Image
                                    key={picture?.id}
                                    onClick={() => handleClickedPicture(itemKey)}
                                    src={picture?.imageUrl}
                                    alt="pictures"
                                    width={picture.size?.width / 5}
                                    height={picture.size?.height / 5}
                                    priority={true}
                                    objectFit='cover'
                                />
                      );
                    })}
                </Masonry>
            </ResponsiveMasonry>
            <Lightbox
                carousel={{
                  preload: 4,
                }}
                index={Number(selectedPictureId)}
                open={open}
                close={() => setOpen(false)}
                slides={configuredArr}
                plugins={[Thumbnails, Fullscreen]}
            />
        </>
  );
};

export default ResponsiveGallery;