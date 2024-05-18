'use client';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';
import { useState, useEffect } from 'react';
import { getSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

// export default function Page() {
//   const [session, setSession] = useState();

//   useEffect(() => {
//     async function fetchData() {
//       const session = await getServerSession(authOptions);
//       setSession(session);
//     }

//     fetchData();

//     return session;
//   }, []);

//   return (
//     <>
//       <h1>olalala </h1>
//       <button onClick={()=>signOut()}>sair</button>
//     </>
//   );
// }

export default function Page() {
  const {push} = useRouter()
  const session = getSession();
  const [account, setAcount] = useState([]);

  async function dataUser() {
    const response = await session.then((data) => data.user)
    setAcount(response.forEach(element => {
      element
    }))

    console.log(account);
  }

  if(!session){
    push('/conta/login')
  } else {
    dataUser()
  }

  function handleGetSession() {
  }

  return (
    <>
      <h1>TEla de login adm {account}</h1>


      <button
        onClick={handleGetSession}
        className='daisy-btn daisy-btn-warning'
      >
        Log out
      </button>
    </>
  );
}
