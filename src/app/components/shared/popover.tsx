'use client';
import { Popover } from '@headlessui/react';
import GlobalButton, { GlobalButtonSettings } from './button';
import GlobalCard, { GlobalCardSettings } from './card';

type GlobalPopoverSettings = {
  button: GlobalButtonSettings;
  card?: GlobalCardSettings;
  body?: string;
};
export default function GlobalPopover(props: GlobalPopoverSettings) {
  console.log(props.body);
  return (
    <Popover className='relative'>
      <Popover.Button className='relative z-0'>
        <GlobalButton
          text={props.button.text}
          color={props.button.color}
          size={props.button.size}
          link={props.button.link}
          width={props.button.width}
        />
      </Popover.Button>

      <Popover.Overlay className='fixed inset-0 bg-black opacity-30' />

      <Popover.Panel className='absolute z-10'>
        <GlobalCard
          logo={props.card?.logo}
          icon={props.card?.icon}
          header={props.card?.header}
          subheader={props.card?.subheader}
          verticalLine={props.card?.verticalLine || false}
          horizontalLine={props.card?.horizontalLine || false}
          longDescription={props.body}
          height='max-h-80'
        />
      </Popover.Panel>
    </Popover>
  );
}
