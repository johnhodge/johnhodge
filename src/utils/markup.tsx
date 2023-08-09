import DOMPurify from 'isomorphic-dompurify';
type markdown = { markdown: string };

export default function MarkUp({ markdown }: markdown) {
  const markupList = markdown.split('\n').filter((line: string) => line != '');
  return (
    <div className='prose prose-slate'>
      {markupList.map((p: string) =>
        p.startsWith('-') ? (
          <li
            className='list-outside list-disc pl-4'
            key={p.replace(' ', '')}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(p.replace('- ', '')),
            }}
          />
        ) : (
          <p
            key={p.replace(' ', '')}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(p) }}
          />
        )
      )}
    </div>
  );
}
