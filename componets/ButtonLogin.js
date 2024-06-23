import Provider from '@/componets/Provider';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ButtonLogin({ Text, children }) {
  return (
    <>
      <Provider>
        <button
          onClick={() => signIn('google', { callbackUrl: '/home' })}
          className='bg-[#EAEDFF] w-10/12 flex items-center justify-center gap-2 text-base font-semibold py-2 px-5 rounded-lg'
          type='button'
        >
          {children} {Text}
        </button>
      </Provider>
    </>
  );
}
