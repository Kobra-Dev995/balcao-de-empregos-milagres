'use client';

import { getSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const { push, replace } = useRouter();
  const session = getSession();
  const [account, setAccount] = useState([]);
  const [expire, setExpire] = useState();

  async function dataUser() {
    const data = (await session)?.user;
    const response = (await session)?.expires;

    setAccount([0, data]);
    setExpire([0, response]);
  }

  
  useEffect(()=>{
    if (!session?.user) {
      replace('/conta/login')
      return
    }
    dataUser()
  },[])

  function get() {
    dataUser();
    console.log(account[1]);
  }

  console.log(session);

  return (
    <>
      <h1>
        TEla de login adm <b> {account[1]?.name} </b>
      </h1>

      <span>{account[1]?.email}</span>
      <br />
      <button onClick={() => signOut()}>Sign out</button>
      <br/>
      <button onClick={get}>usuario</button>
    </>
  );
}
