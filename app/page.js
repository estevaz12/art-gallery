import Image from 'next/image';

/**
 * The homepage of the website
 * @returns {JSX.Element} The homepage component
 */
export default function Home() {
  return (
    <main className='max-w-md lg:max-w-[1440px] mx-auto px-4 lg:px-10 xl:px-[10.25rem] my-[7.5rem] lg:my-[11.25rem] grid gap-8 lg:gap-[1.875rem]'>
      {/* First part of image grid */}
      <section className='max-lg:space-y-6 lg:flex lg:gap-[1.875rem]'>
        <Image
          src='/image-grid-1.jpg'
          alt='Image of art gallery'
          width={635}
          height={400}
          className='max-lg:h-80 max-lg:w-auto max-xl:object-cover lg:order-last lg:w-1/2 lg:h-auto xl:w-full xl:h-auto'
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

      {/* Second part of image grid (2 images + text) */}
      <section className='grid gap-4 lg:gap-[1.875rem] lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_1fr]'>
        <Image
          src='/image-grid-2.jpg'
          alt='Image of art gallery'
          width={635}
          height={720}
          className='max-lg:h-[30rem] max-lg:w-auto max-xl:object-cover lg:row-span-2 lg:h-full lg:w-auto'
        />
        <Image
          src='/image-grid-3.jpg'
          alt='Image of art gallery'
          width={445}
          height={313}
          className='max-lg:h-[12.5rem] max-lg:w-full max-lg:object-cover'
        />
        <div className='px-6 py-12 space-y-6 bg-black lg:px-12 lg:py-16 lg:space-y-8'>
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
