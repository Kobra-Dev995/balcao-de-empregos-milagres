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
        : console.error('Você Não Tem Permissão')}

      <h1>{session?.user.name}</h1>

      <form onSubmit={check}>
        <input
          type='file'
          accept='application/pdf'
          className='daisy-file-input daisy-file-input-bordered w-8/12 max-w-xs'
          required
        />
        <br />
        <button className='daisy-btn daisy-btn-accent' type='submit'>
          Enviar
        </button>
      </form>

      <section>

      </section>

      <br />
      <button onClick={() => signOut()} className='daisy-btn daisy-btn-error'>
        Sign out
      </button>
      <br />
    </>
  );
}
