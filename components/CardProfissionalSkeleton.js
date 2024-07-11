import Image from 'next/image';

export default function CardProfissionalSkeleton() {
  return (
    <>
      <div className='daisy-card daisy-card-compact w-96 border-stone-600/35 shadow-xl m-5 flex flex-col  items-center'>
        <figure className='w-28 flex justify-center'>
          <div className='w-28 h-28 daisy-skeleton rounded-full' ></div>
          
        </figure>

        <div className='daisy-card-body w-full '>
          <h2 className='daisy-card-title font-bold daisy-skeleton w-full h-6'></h2>
          <span className='w-12 h-6 font-medium daisy-skeleton'></span>
          <span className='w-56 h-6 font-medium daisy-skeleton'></span>
          <span className='w-28 h-6 font-medium daisy-skeleton'></span>
          <span className='w-56 h-6 font-medium daisy-skeleton'></span>
          <span className='w-16 h-6 font-medium daisy-skeleton'></span>
          <span className='w-56 h-6 font-medium daisy-skeleton'></span>
        </div>
      </div>
    </>
  );
}
