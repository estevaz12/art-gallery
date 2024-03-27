import Image from 'next/image';

export default function Home() {
  return (
    <main className='px-4 lg:px-[10.25rem] my-[7.5rem] lg:my-[11.25rem] grid gap-8 lg:gap-[1.875rem]'>
      <section className='max-lg:space-y-6 lg:flex lg:gap-[1.875rem]'>
        <Image
          src='/image-grid-1.jpg'
          alt='Image of art gallery'
          width={635}
          height={400}
          className='max-lg:h-80 max-lg:w-auto max-lg:object-cover lg:order-last'
        />
        <div className='space-y-5 lg:space-y-8 lg:pr-[5.9375rem] lg:my-[3.75rem]'>
          <h2 className='max-lg:whitespace-pre-line lg:text-balance'>
            YOUR DAY {'\n'} AT THE GALLERY
          </h2>
          <p>
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
      </section>

      <section className='grid gap-4 lg:gap-[1.875rem] lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_1fr]'>
        <Image
          src='/image-grid-2.jpg'
          alt='Image of art gallery'
          width={635}
          height={720}
          className='max-lg:h-[30rem] max-lg:w-auto max-lg:object-cover lg:row-span-2'
        />
        <Image
          src='/image-grid-3.jpg'
          alt='Image of art gallery'
          width={445}
          height={313}
          className='max-lg:h-[12.5rem] max-lg:w-full max-lg:object-cover'
        />
        <div className='px-6 py-12 space-y-6 bg-black'>
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
