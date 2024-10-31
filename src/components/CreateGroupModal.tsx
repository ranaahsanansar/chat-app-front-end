import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react';

import Input from './Input';
import Button from './Button';
import { use, useEffect, useState } from 'react';

export default function CreateGroupModal({ handleRevalidate }: { handleRevalidate: () => void }) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const [name, setName] = useState('');

  useEffect(() => {
    setName('');
  }, [isOpen]);

  const handleCreateClick = () => {
    console.log(name);
    if (name === '') {
      onClose();
      return;
    }
    handleRevalidate();
    onClose();
  };
  return (
    <>
      <Button onClick={onOpen} className='my-2'>
        Crate New Group
      </Button>
      <Modal className='bg-primary' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1 text-white'>Create new Group</ModalHeader>
              <ModalBody>
                <Input label='Name' placeholder='Name' onChange={(e: any) => setName(e.target.value)} />
              </ModalBody>
              <ModalFooter>
                <Button variant='error' onClick={onClose}>
                  Close
                </Button>
                <Button variant='primary' onClick={handleCreateClick}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
