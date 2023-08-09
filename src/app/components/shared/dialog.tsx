'use client';

import GlobalButton from '@/app/components/shared/button';
import GlobalCard from '@/app/components/shared/card';
import type { GlobalButtonSettings, GlobalCardSettings } from '@/app/types';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

type GlobalDialogSettings = {
  card: GlobalCardSettings;
};
export default function GlobalDialog(props: GlobalDialogSettings) {
  let [isOpen, setIsOpen] = useState(false);

  function closeDialog() {
    setIsOpen(false);
  }

  function visitCta() {
    setIsOpen(false);
    location.href = '/#contact';
  }

  function openModal() {
    setIsOpen(true);
  }
  const closeDialogButton: GlobalButtonSettings = {
    size: 'small',
    width: 'fit',
    color: 'gray',
    text: 'Close',
    buttonType: 'button',
    onClick: closeDialog,
  };

  const visitCtaButton: GlobalButtonSettings = {
    size: props.card.dialogCallToAction?.size ?? 'small',
    width: props.card.dialogCallToAction?.width ?? 'fit',
    color: props.card.dialogCallToAction?.color ?? 'secondary',
    text: props.card.dialogCallToAction?.text ?? 'Schedule a consultation',
    buttonType: 'button',
    onClick: visitCta,
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
        <Dialog as='div' className='relative z-10' onClose={closeDialog}>
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
                    closeDialog={closeDialogButton}
                    callToAction={visitCtaButton}
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
