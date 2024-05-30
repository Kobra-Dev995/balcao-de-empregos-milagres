import Provider from '@/componets/Provider';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function ButtonLogin({ Text, children }) {
  const { data: session, status } = useSession();
  const { replace } = useRouter();

  return (
    <>
      <Provider>
        {status === 'authenticated' ? replace('/admin') : false}

        <button
          onClick={() => signIn('google', { callbackUrl: '/admin' })}
          className='bg-[#EAEDFF] w-10/12 flex items-center justify-center gap-2 text-base font-semibold py-2 rounded-lg'
          type='button'
        >
          {children} {Text}
        </button>
      </Provider>
    </>
  );
}
