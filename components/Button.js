import Arrow from '@/public/icon-arrow-right.svg';

export default function Button() {
  return (
    <button className='flex group'>
      <div className=' bg-black group-hover:bg-gold text-white font-heading font-extrabold text-xl leading-6 text-center  tracking-[0.2275em] py-6 px-8'>
        OUR LOCATION
      </div>
      <div className='bg-gold group-hover:bg-black p-6'>
        <Arrow />
      </div>
    </button>
  );
}
