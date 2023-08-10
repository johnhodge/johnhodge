'use client';

import GlobalButton from '@/app/components/shared/button';
import GlobalCard from '@/app/components/shared/card';
import type { GlobalButtonSettings, GlobalCardSettings } from '@/app/types';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function GlobalDialog(props: GlobalCardSettings) {
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
    size: props.dialogCallToAction?.size ?? 'small',
    width: props.dialogCallToAction?.width ?? 'fit',
    color: props.dialogCallToAction?.color ?? 'secondary',
    text: props.dialogCallToAction?.text ?? 'Schedule a consultation',
    buttonType: 'button',
    onClick: visitCta,
  };

  return (
    <>
      {props.openDialog ? (
        <GlobalButton
          size={props.openDialog.size}
          width={props.openDialog.width}
          color={props.openDialog.color}
          text={props.openDialog.text}
          buttonType='button'
          onClick={openModal}
        />
      ) : (
        ''
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          open={isOpen}
          className='relative z-10'
          onClose={closeDialog}>
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
                    logo={props.logo}
                    icon={props.icon}
                    iconId={props.iconId}
                    iconAlign={props.iconAlign}
                    header={props.header}
                    subheader={props.subheader}
                    shortDescription={props.shortDescription}
                    longDescription={props.body}
                    verticalLine={props.verticalLine}
                    horizontalLine={props.horizontalLine}
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
