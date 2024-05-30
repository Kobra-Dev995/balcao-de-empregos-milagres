'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const { push, replace } = useRouter();
  const { data: session, status } = useSession();
  const [arquivo, setArquivo] = useState();

  

  function check(e) {
    e.preventDefault();
    console.log(e);

    setArquivo(e.target[0].value);

    console.log(e.target[0].value);
    console.log(e.target[0].files[0]);
  }

  return (
    <>
      {status === 'unauthenticated'
        ? replace('/')
        : console.warn('Você Não Tem Permissão')}

      <h1 className='text-center'>{session?.user.email}</h1>

      <br />
      <button onClick={() => signOut()} className='daisy-btn daisy-btn-error'>
        Sign out
      </button>
      <br />
    </>
  );
}
