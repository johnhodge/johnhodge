export type CalloutData = {
  message: string;
  type: 'warning' | 'alert' | 'note' | 'success';
};

export default function GlobalCallout(props: CalloutData) {
  const color = {
    success: `text-primary-900 bg-primary-50  border-primary-500`,
    alert: `text-secondary-900 bg-secondary-50  border-secondary-500`,
    warning: `text-red-900 bg-red-50  border-red-500`,
    note: `text-sky-900 bg-sky-50  border-sky-500`,
  };
  const icon = { success: '✅', alert: '⚠️', warning: '⛔️', note: 'ℹ️' };

  return (
    <div
      className={`my-4 p-4 rounded-lg flex align-top gap-2 border ${
        color[props.type]
      }`}>
      <span className='font-emoji'>{icon[props.type]}</span>
      <span>{props.message}</span>
    </div>
  );
}
