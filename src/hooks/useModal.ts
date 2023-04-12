import { useState } from 'react';

export const useModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalSubTitle, setModalSubTitle] = useState('');
  const [modalType, setModalType] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    modalTitle,
    modalSubTitle,
    modalType,
    setModalType,
    setModalTitle,
    setModalSubTitle,
    handleOpen,
    handleClose,
  };
};
