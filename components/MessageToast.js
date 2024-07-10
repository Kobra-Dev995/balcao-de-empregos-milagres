export default function MessageToast({ msg }) {
  return (
    <>
      <div role='alert' className='alert max-w-lg fixed top-3/4 right-0 '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='stroke-info h-6 w-6 shrink-0'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <span>Debuger</span> <br />
        <p>{JSON.stringify({ msg })}</p>
      </div>
    </>
  );
}
