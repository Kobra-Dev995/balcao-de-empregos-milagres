export default function principal() {
  return (
    <main>
      <header className='flex justify-start gap-5 pt-3 pl-3 items-center'>
        <svg
          width='28'
          height='21'
          viewBox='0 0 28 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M2 19H26M2 10.5H20M2 2H26'
            stroke='black'
            stroke-width='3'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>

        <span className='text-lg -webkit-font-smoothing: antialiased; font-bold '>
          Balcão de Empregos
        </span>
      </header>
      <div className='bg-fotofundo bg-cover w-full h-52 mt-4'>
        <span className='text-2xl font-extrabold pl-4 text-white'>
          Balcão de Empregos
        </span>
      </div>
    </main>
  );
}
