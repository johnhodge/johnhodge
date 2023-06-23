import Image from 'next/image';
import type { MediaImage } from '@/app/types';
import Button from './button';
import { ButtonSettings } from './button';

type GlobalCard = {
  logo?: MediaImage;
  icon?: MediaImage;
  header: string;
  subheader: string;
  shortDescription: string;
  longDescription: string;
  button?: ButtonSettings;
  verticalLine: boolean;
  horizontalLine: boolean;
};

export default function GlobalCard(props: GlobalCard) {
  return (
    <section>
      {props.logo?.url ? (
        <figure>
          <Image
            src={props.logo.url}
            height={props.logo.height}
            width={props.logo.width}
            title={props.logo.title}
            alt={props.logo.description}
            className='h-6'
          />
          <figcaption className='hidden'>{props.logo.description}</figcaption>
        </figure>
      ) : (
        ''
      )}

      <div>
        {props.icon?.url ? (
          <figure>
            <Image
              src={props.icon.url}
              height={props.icon.height}
              width={props.icon.width}
              title={props.icon.title}
              alt={props.icon.description}
            />
            <figcaption className='hidden'>{props.icon.description}</figcaption>
          </figure>
        ) : (
          ''
        )}
        <div>
          <h3>{props.subheader}</h3>
          <p>{props.shortDescription}</p>
        </div>
        <h2>{props.header}</h2>
        <p>{props.longDescription}</p>
        {props.button ? (
          <Button
            text={props.button.text}
            size={props.button.size}
            color={props.button.color}
            width={props.button.width}
            link={props.button.link}
          />
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
