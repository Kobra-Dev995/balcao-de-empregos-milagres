import Provider from '@/componets/Provider';
import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <>
      <Provider>
        <div className='w-full h-screen flex items-center justify-center'>
          <button
            className='btn btn-outline btn-primary'
            onClick={() => signIn('google', { callbackUrl: '/admin' })}
          >
            Fazer login com o google
          </button>
        </div>
      </Provider>
    </>
  );
}
