import { MDXRemote } from 'next-mdx-remote/rsc';

export type CalloutData = {
  message: string;
  type: 'warning' | 'alert' | 'note' | 'success';
};

export default function GlobalCallout(props: CalloutData) {
  const color = {
    success: `text-primary-700 bg-primary-50 prose-strong:text-primary-700 prose-code:text-primary-700 prose-em:text-primary-700 prose-blockquote:text-primary-700 prose-blockquote:border-primary-400 marker:prose-li:text-primary-700 prose-hr:border-primary-400 border-primary-400`,
    alert: `text-secondary-700 bg-secondary-50 prose-strong:text-secondary-700 prose-code:text-secondary-700 prose-em:text-secondary-700 prose-blockquote:text-secondary-700 prose-blockquote:border-secondary-400 marker:prose-li:text-secondary-700 prose-hr:border-secondary-400 border-secondary-400`,
    warning: `text-red-700 bg-red-50 prose-strong:text-red-700 prose-code:text-red-700 prose-em:text-red-700 prose-blockquote:text-red-700 prose-blockquote:border-red-400 marker:prose-li:text-red-700 prose-hr:border-red-400 border-red-400`,
    note: `text-sky-700 bg-sky-50 prose-strong:text-sky-700 prose-code:text-sky-700 prose-em:text-sky-700 prose-blockquote:text-sky-700 prose-blockquote:border-sky-400 marker:prose-li:text-sky-700 prose-hr:border-sky-400 border-sky-400`,
  };
  const icon = { success: '✅', alert: '⚠️', warning: '⛔️', note: 'ℹ️' };

  return (
    <div
      className={`my-4 p-4 rounded-lg flex align-top gap-2 border ${
        color[props.type]
      }`}>
      <span className='font-emoji'>{icon[props.type]}</span>
      <div className='prose-slate prose-p:m-0 prose-hr:my-4 prose-a:text-blue-700'>
        <MDXRemote source={props.message} />
      </div>
    </div>
  );
}
