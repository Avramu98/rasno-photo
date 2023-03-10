import React, { useEffect, useRef, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/legacy/image';
import { Lightbox } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';

import { PictureI } from 'types/misc';
import AnimatedHeader from '@/components/shared/animatedTypography/AnimatedHeader';
import LightboxNextJsImage from '@/components/portfolio/Gallery/components/LightboxNextJsImage';
import { useMobileCheck } from '@/lib/hooks/useMobileCheck';
import DefaultLoader from '@/components/shared/loading/DefaultLoader';

const ResponsiveGallery = ({ error, isLoadingInitialData, isValidating, pictures, isReachingEnd, setSize, size, isLoadingMore }:any) => {
  const [selectedPictureId, setSelectedPictureId] = useState<string | null>(null);
  const [open, setOpen] = React.useState(false);
  const { isPhone } = useMobileCheck();

  const handleClickedPicture = (selectedId: string) => {
    setSelectedPictureId(selectedId);
    setOpen(true);
  };

  const configuredArr = pictures?.map((item: PictureI) => {
    return {
      src: item.imageUrl,
      width: item.size.width,
      height: item.size.height,
    };
  });

  const observer = useRef<IntersectionObserver>();
  const lastElementRef = useRef<HTMLDivElement>();

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && !isLoadingMore && !isReachingEnd && !isValidating) {
      setSize(size + 1);
    }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(handleObserver, { threshold: 0.1, rootMargin: '0px', root: null });
    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [lastElementRef, isValidating]);


  if (error) return <div>Error loading pictures</div>;
  if (isLoadingInitialData) return <div>Loading pictures...</div>;
  
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
            {/*// @ts-ignore*/}
            <div className='h-10 w-full h-20' ref={lastElementRef}/>

            {isReachingEnd ? (
                <AnimatedHeader moreStyles='text-2xl' text='Din p??cate ai ajuns la ultimele poze'/>
            ) : (
                <button
                    className='w-full text-center flex justify-center'
                    onClick={() => {
                      setSize(size + 1);
                    }}
                    disabled={isLoadingMore}
                >
                    {isLoadingMore && <DefaultLoader/>}
                </button>
            )}

            <Lightbox
                carousel={{
                  preload: 4,
                }}
                index={Number(selectedPictureId)}
                open={open && !isPhone}
                close={() => setOpen(false)}
                slides={configuredArr}
                render={{ slide: LightboxNextJsImage }}
                plugins={[Thumbnails, Fullscreen]}
            />
        </>
  );
};

export default ResponsiveGallery;