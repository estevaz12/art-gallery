import Image from 'next/image';
import Button from './Button';

export default function Header() {
  return (
    <header className='max-lg:px-4 max-lg:space-y-8 lg:relative'>
      <Image
        src='/image-hero.jpg'
        alt='Image of people looking at art'
        width={540}
        height={800}
        className='max-lg:full-width max-lg:h-60 max-lg:object-cover lg:bg-black lg:pl-[28.12rem] lg:w-auto lg:h-full'
      />
      <h1 className='text-6xl lg:text-8xl leading-[3.4375rem] lg:leading-88 whitespace-pre-line lg:absolute lg:top-[11.875rem] lg:left-[10.25rem] lg:bg-clip-text lg:text-transparent lg:bg-gradient-to-r lg:from-white lg:from-[285.5px] lg:to-black lg:to-[285.5px]'>
        MODERN {'\n'} ART GALLERY
      </h1>
      <div className='space-y-8 lg:space-y-16 lg:w-[21.875rem] lg:absolute lg:top-[11.875rem] lg:right-[10.25rem]'>
        <p>
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <Button />
      </div>
    </header>
  );
}
