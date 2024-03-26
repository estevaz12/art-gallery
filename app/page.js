import Image from 'next/image';

export default function Home() {
  return (
    <main className='my-[7.5rem] lg:my-[11.25rem] space-y-8'>
      <section className='space-y-6'>
        <Image
          src='/image-grid-1.jpg'
          alt='Image of art gallery'
          width={635}
          height={400}
          className='max-md:h-80 max-md:w-auto max-md:object-cover'
        />
        <h2 className='text-balance max-md:whitespace-pre-line'>
          YOUR DAY {'\n'} AT THE GALLERY
        </h2>
        <p>
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </section>

      <section className='space-y-4'>
        <Image
          src='/image-grid-2.jpg'
          alt='Image of art gallery'
          width={635}
          height={720}
          className='max-md:h-[30rem] max-md:w-auto max-md:object-cover'
        />
        <Image
          src='/image-grid-3.jpg'
          alt='Image of art gallery'
          width={445}
          height={313}
          className='max-md:h-[12.5rem] max-md:w-full max-md:object-cover'
        />
        <div className='bg-black px-6 py-12 space-y-6'>
          <h2 className='text-white'>COME &amp; BE INSPIRED</h2>
          <p className='text-white'>
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </section>
    </main>
  );
}
