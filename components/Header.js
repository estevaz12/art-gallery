import Image from 'next/image';
import Logo from './Logo';
import Button from './Button';

export default function Header() {
  return (
    <header className='px-4 lg:px-[10.25rem] space-y-8'>
      <Image
        src='/image-hero.jpg'
        alt='Image of people looking at art'
        width={540}
        height={800}
        className='max-md:full-width max-md:h-60 max-md:object-cover'
      />
      <Logo />
      <p>
        The arts in the collection of the Modern Art Gallery all started from a
        spark of inspiration. Will these pieces inspire you? Visit us and find
        out.
      </p>
      <Button />
    </header>
  );
}
