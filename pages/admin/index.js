'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { push, replace } = useRouter();
  const { data: session, status } = useSession()

  return (
    <>
      {status === 'unauthenticated' ? replace('/conta/login') : <h1>TEla de login adm <b> {session?.user.name} </b></h1>}
      

      <br />
      <button onClick={() => signOut()} className='daisy-btn daisy-btn-error'>Sign out</button>
      <br/>
    </>
  );
}
