'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import GlobalButton, { GlobalButtonSettings } from './button';
import GlobalCard from './card';

type ModalProps = {
  title: string;
};
export default function MyModal(props: ModalProps) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const closeButton: GlobalButtonSettings = {
    size: 'small',
    width: 'fit',
    color: 'primary',
    text: 'Close',
    buttonType: 'button',
    onClick: closeModal,
  };

  return (
    <>
      <GlobalButton
        size='large'
        width='fit'
        color='primary'
        text={props.title}
        buttonType='button'
        onClick={openModal}
      />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className=' transition-all'>
                  <GlobalCard
                    verticalLine={false}
                    horizontalLine={true}
                    subheader={props.title}
                    longDescription='This is a long description for some bullshit man'
                    button={closeButton}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
