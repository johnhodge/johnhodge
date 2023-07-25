import { MDXRemote } from 'next-mdx-remote/rsc';

export type CalloutData = {
  message: string;
  type: 'warning' | 'alert' | 'note' | 'success';
};

export default function GlobalCallout(props: CalloutData) {
  const color = {
    success: `text-primary-900 bg-primary-50  prose-strong:text-primary-900 prose-code:text-primary-900 prose-em:text-primary-900 prose-blockquote:text-primary-900 prose-blockquote:border-primary-600 marker:prose-li:text-primary-900 prose-hr:border-primary-600 prose-hr:my-8 border-primary-500`,
    alert: `text-secondary-900 bg-secondary-50 prose-strong:text-secondary-900 prose-code:text-secondary-900 prose-em:text-secondary-900 prose-blockquote:text-secondary-900 prose-blockquote:border-secondary-600 marker:prose-li:text-secondary-900 prose-hr:border-secondary-600 prose-hr:my-8 border-secondary-500`,
    warning: `text-red-900 bg-red-50 prose-strong:text-red-900 prose-code:text-red-900 prose-em:text-red-900 prose-blockquote:text-red-900 prose-blockquote:border-red-600 marker:prose-li:text-red-900 prose-hr:border-red-600 prose-hr:my-8 border-red-500`,
    note: `text-sky-900 bg-sky-50 prose-strong:text-sky-900 prose-code:text-sky-900 prose-em:text-sky-900 prose-blockquote:text-sky-900 prose-blockquote:border-sky-600 marker:prose-li:text-sky-900 prose-hr:border-sky-600 prose-hr:my-8 border-sky-500`,
  };
  const icon = { success: '✅', alert: '⚠️', warning: '⛔️', note: 'ℹ️' };

  return (
    <div
      className={`my-4 p-4 rounded-lg flex align-top gap-2 border ${
        color[props.type]
      }`}>
      <span className='font-emoji'>{icon[props.type]}</span>
      <div className='prose-p:m-0 prose-slate prose-a:text-blue-700'>
        <MDXRemote source={props.message} />
      </div>
    </div>
  );
}
