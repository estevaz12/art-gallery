import Arrow from '@/public/icon-arrow-right.svg';

/**
 * A button component that displays the location of the art gallery.
 *
 * @returns {JSX.Element} The button component
 */
export default function Button() {
  return (
    <button className='flex group'>
      {/* The main text of the button */}
      <div className=' bg-black group-hover:bg-gold text-white font-heading font-extrabold text-xl leading-6 text-center  tracking-[0.2275em] py-6 px-8'>
        OUR LOCATION
      </div>
      {/* The arrow icon on the right */}
      <div className='p-6 bg-gold group-hover:bg-black'>
        <Arrow />
      </div>
    </button>
  );
}
