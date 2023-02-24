import React from 'react';
import { LinkedinShareButton } from 'react-share';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ShareNav = (currentPictureUrl: string) => {
  return (
        <div>
            <div className='absolute top-0 right-0 z-40 border-4'>
                <LinkedinShareButton
                    url={currentPictureUrl}
                    title="Check out this iHateReading custom repository "
                >
                    <LinkedInIcon/>
                </LinkedinShareButton>
            </div>
        </div>
  );
};

export default ShareNav;