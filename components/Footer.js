import LogoSVG from '@/public/logo-light.svg';
import Fb from '@/public/icon-facebook.svg';
import Insta from '@/public/icon-instagram.svg';
import Twitter from '@/public/icon-twitter.svg';

export default function Footer() {
  return (
    <footer className='px-8 lg:px-[10.25rem] py-12 lg:py-20 bg-black flex max-md:flex-col max-md:gap-[2.375rem] lg:justify-between'>
      <div className='lg:w-[45.625rem] lg:flex  lg:justify-between'>
        <LogoSVG className='h-[2.5rem] lg:h-[3.625rem] max-md:mb-[2.375rem]' />
        <small className='text-white text-base leading-[1.625rem] lg:text-lg lg:w-[26.875rem]'>
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </small>
      </div>
      <div className='flex gap-5'>
        <Fb />
        <Insta />
        <Twitter />
      </div>
    </footer>
  );
}
