import GetAsset from '@/utils/asset';

export default function Loading() {
  return (
    <div className='absolute inset-0 flex items-center justify-center bg-white'>
      <div className='w-28 h-auto animate-pulse'>
        <GetAsset
          assetId='6rZXb7onE0YWUMdADLDYfW'
          figcaption={false}
          priority={false}
        />
      </div>
    </div>
  );
}
