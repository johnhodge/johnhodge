type Button = {
  size: 'small' | 'large';
  width: 'full' | 'fit';
  color: 'primary' | 'secondary' | 'gray';
  link: string;
  text: string;
};
export default function Button(props: Button) {
  return (
    <a
      className={`inline-block border border-solid bg-gradient-to-b text-center font-bold ${
        props.width == 'full' ? 'min-w-full' : 'min-width-fit'
      } ${
        props.size == 'small'
          ? 'text-sm p-2 rounded-lg'
          : 'text-xl px-9 py-6 rounded-3xl'
      } ${
        props.color == 'secondary'
          ? 'border-secondary-400 from-secondary-100 to-secondary-50 text-secondary-700'
          : props.color == 'primary'
          ? 'border-primary-400 from-primary-100 to-primary-50 text-primary-700'
          : 'border-gray-400 from-gray-100 to-gray-50 text-gray-700'
      }`}
      href={props.link}>
      {props.text}
    </a>
  );
}
