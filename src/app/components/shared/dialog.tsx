'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import GlobalButton, { GlobalButtonSettings } from './button';
import GlobalCard, { GlobalCardSettings } from './card';

type GlobalDialogSettings = {
  card: GlobalCardSettings;
};
export default function GlobalDialog(props: GlobalDialogSettings) {
  console.log(props.card.openDialog);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const closeDialog: GlobalButtonSettings = {
    size: 'small',
    width: 'fit',
    color: 'gray',
    text: 'Close',
    buttonType: 'button',
    onClick: closeModal,
  };

  return (
    <>
      {props.card ? (
        props.card.openDialog ? (
          <GlobalButton
            size={props.card.openDialog.size}
            width={props.card.openDialog.width}
            color={props.card.openDialog.color}
            text={props.card.openDialog.text}
            buttonType='button'
            onClick={openModal}
          />
        ) : (
          ''
        )
      ) : (
        ''
      )}

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
            <div className='flex min-h-full items-center justify-center p-4'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='transition-all max-w-5xl'>
                  <GlobalCard
                    logo={props.card.logo}
                    icon={props.card.icon}
                    iconId={props.card.iconId}
                    iconAlign={props.card.iconAlign}
                    header={props.card.header}
                    subheader={props.card.subheader}
                    shortDescription={props.card.shortDescription}
                    longDescription={props.card.body}
                    verticalLine={props.card.verticalLine}
                    horizontalLine={props.card.horizontalLine}
                    closeDialog={closeDialog}
                    callToAction={props.card.dialogCallToAction}
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
