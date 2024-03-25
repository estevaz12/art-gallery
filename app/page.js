import Image from 'next/image';

export default function Home() {
  return (
    <main className='my-[7.5rem] lg:my-[11.25rem]'>
      <Image
        src='/image-grid-1.jpg'
        alt='Image of art gallery'
        width={635}
        height={400}
        className='max-md:h-80 max-md:w-auto max-md:object-cover'
      />
    </main>
  );
}
