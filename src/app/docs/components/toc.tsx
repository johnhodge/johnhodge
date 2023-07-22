import { readdirSync } from 'fs';
import Link from 'next/link';
import { join } from 'path';

type Props = {
  rootDirectory: string;
};

export default function GlobalTOC(props: Props) {
  const folders = readdirSync(props.rootDirectory);
  return (
    <aside className='hidden md:block col-span-3'>
      <div className='sticky top-32'>
        <p className='pb-4 text-xl font-black'>Concepts</p>
        <ul className='max-h-[calc(75dvh-110px)] overflow-y-auto prose'>
          {folders.map((folder) => (
            <>
              {readdirSync(join(props.rootDirectory, folder)).map((file) => (
                <Link
                  href={`/${join(folder, file)
                    .replace('.mdx', '')
                    .replace('index', '')}`}
                  key={file}>
                  <li>{file}</li>
                </Link>
              ))}
            </>
          ))}
        </ul>
      </div>
    </aside>
  );
}
