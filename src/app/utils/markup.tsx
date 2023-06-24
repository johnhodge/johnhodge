type markdown = { markdown: string };
export default function MarkUp({ markdown }: markdown) {
  const markupList = markdown.split('\n').filter((line: string) => line != '');

  return (
    <>
      {markupList.map((p: string) => (
        <p dangerouslySetInnerHTML={{ __html: p }} />
      ))}
    </>
  );
}
