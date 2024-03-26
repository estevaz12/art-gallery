import LogoSVG from '@/public/logo-light.svg';
import Fb from '@/public/icon-facebook.svg';
import Insta from '@/public/icon-instagram.svg';
import Twitter from '@/public/icon-twitter.svg';

export default function Footer() {
  return (
    <footer className='container mx-auto px-8 lg:px-[10.25rem] py-12 lg:py-20 bg-black flex flex-col gap-[2.375rem]'>
      <LogoSVG />
      <p className='text-white text-base leading-[1.625rem]'>
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>
      <div className='flex gap-5'>
        <Fb />
        <Insta />
        <Twitter />
      </div>
    </footer>
  );
}
