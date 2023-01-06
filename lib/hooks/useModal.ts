import { useState } from 'react';
import { ModalTypeI } from '../../types';

const useModal = () => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalTypeI | null | undefined>(null);

  function toggle(type?: ModalTypeI) {
    setOpen(!open);
    setModalType(type);
  }

  return {
    open,
    toggle,
    modalType,
  };
};

export default useModal;