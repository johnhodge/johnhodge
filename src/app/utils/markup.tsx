type markdown = { markdown: string };
export default function MarkUp({ markdown }: markdown) {
  const markupList = markdown.split('\n').filter((line: string) => line != '');

  return (
    <>
      {markupList.map((p: string) =>
        p.startsWith('-') ? (
          <ul key={p.replace(' ', '')} className='list-ouside list-disc pl-4'>
            <li
              className=''
              key={p.replace(' ', '')}
              dangerouslySetInnerHTML={{ __html: p.replace('- ', '') }}
            />
          </ul>
        ) : (
          <p key={p.replace(' ', '')} dangerouslySetInnerHTML={{ __html: p }} />
        )
      )}
    </>
  );
}
