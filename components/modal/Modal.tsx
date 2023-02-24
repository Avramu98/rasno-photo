import React, { useContext, useEffect } from 'react';

import CreateModal from '@/components/cms/CreateModal';
import EditModal from '@/components/cms/EditModal';
import DeleteModal from '@/components/cms/DeleteModal';
import { AppContext } from '@/lib/context/appContext';
import { ModalTypeI } from 'types/context';
import { PictureI } from 'types/misc';

const Modal = ({
  currentPicture,
}: { currentPicture?: PictureI | null }) => {
  const { closeModal, activeModal } = useContext(AppContext);
  
  useEffect(() => {
    const keyDownHandler = (event: { key: string; preventDefault: () => void; }) => {

      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    // 👇️ clean up event listener
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  if (activeModal === ModalTypeI.CREATE) return (
        <CreateModal
            activeModal={activeModal}
            closeModal={closeModal}
        />
  );
  if (activeModal === ModalTypeI.EDIT && currentPicture) return (
        <EditModal
            activeModal={activeModal}
            closeModal={closeModal}
            picture={currentPicture}
        />
  );
  if (activeModal === ModalTypeI.DELETE && currentPicture) return (
        <DeleteModal
            picture={currentPicture}
            activeModal={activeModal}
            closeModal={closeModal}
        />
  );

  return <></>;
};

export default Modal;
