import Image from 'next/image';
import Button from './Button';

export default function Header() {
  return (
    <header className='max-lg:max-w-md max-lg:mx-auto max-lg:px-4 max-lg:space-y-8 lg:relative'>
      <Image
        src='/image-hero.jpg'
        alt='Image of people looking at art'
        width={540}
        height={800}
        className='max-lg:full-width max-lg:h-60 max-lg:object-cover lg:bg-black lg:pl-[30.25rem] xl:pl-[28.12rem] lg:w-auto lg:h-full'
      />
      <h1 className='text-6xl lg:text-8xl leading-[3.4375rem] lg:leading-88 whitespace-pre-line lg:absolute lg:top-24 xl:top-[11.875rem] lg:left-10 xl:left-[10.25rem] lg:text-white xl:bg-clip-text xl:text-transparent xl:bg-gradient-to-r xl:from-white xl:from-[285.5px] xl:to-black xl:to-[285.5px]'>
        MODERN {'\n'} ART GALLERY
      </h1>
      <div className='space-y-8 lg:space-y-16 lg:w-[21.875rem] lg:absolute lg:bottom-24 xl:top-[11.875rem] lg:max-xl:left-10 xl:right-[10.25rem]'>
        <p className='lg:max-xl:font-normal lg:max-xl:text-white'>
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <Button />
      </div>
    </header>
  );
}
