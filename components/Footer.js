import LogoSVG from '@/public/logo-light.svg';
import Fb from '@/public/icon-facebook.svg';
import Insta from '@/public/icon-instagram.svg';
import Twitter from '@/public/icon-twitter.svg';

/**
 * The website footer component.
 *
 * @returns {JSX.Element} The footer component.
 */
export default function Footer() {
  return (
    // The main container for the footer.
    <footer className='px-8 lg:px-10 xl:px-[10.25rem] py-12 lg:py-20 bg-black flex max-lg:flex-col max-lg:gap-[2.375rem] lg:justify-between'>
      {/* The main content of the footer. */}
      <div className='lg:w-[45.625rem] lg:flex  lg:justify-between'>
        {/* The logo in the footer */}
        <LogoSVG className='h-[2.5rem] lg:h-[3.625rem] max-lg:mb-[2.375rem]' />
        {/* The text content of the footer. */}
        <small className='text-white text-base leading-[1.625rem] lg:text-lg lg:w-[26.875rem]'>
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </small>
      </div>
      {/* The social media links in the footer. */}
      <div className='flex gap-5'>
        <Fb />
        <Insta />
        <Twitter />
      </div>
    </footer>
  );
}
