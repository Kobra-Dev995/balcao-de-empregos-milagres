import Provider from '@/componets/Provider';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { data: session, status } = useSession();
  const { replace } = useRouter();

  return (
    <>
      <Provider>
        {status === 'authenticated'
          ? replace('/admin')
          : console.warn('Você não tem conta')}

        <div className='w-full h-screen flex items-center justify-center'>
          <button
            className='daisy-btn daisy-btn-accent'
            onClick={() => signIn('google', { callbackUrl: '/admin' })}
          >
            Fazer login com o google
          </button>
        </div>
      </Provider>
    </>
  );
}

// apenas para commitar
