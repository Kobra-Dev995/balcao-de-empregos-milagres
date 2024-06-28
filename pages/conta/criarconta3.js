import next from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CriarContaPasso2() {
  const [userEmail, setUserEmail] = useState('');
  const { replace } = useRouter();

  function mudar(e) {
    console.log(e.target);
  }

  async function testeAPI() {
    const req = await fetch('/api/responseForm');
    const obj = JSON.parse(await req.text());
    console.log(obj);

    if (obj[1] != undefined) {
      setUserEmail(obj[1].email);
    } else {
      setUserEmail('exemplo@gmail.com');
    }
  }

  return (
    <>
      <Head>
        <title>Pagina para Criar a Conta</title>
      </Head>

      <header className='bg-primary-green flex flex-col p-5'>
        <h1 className='text-white text-xl font-bold' onClick={testeAPI}>
          Criar Conta
        </h1>
        <span className='mt-4 text-white text-base my-2'>
          Processo para criar conta
        </span>

        <ul className='daisy-steps daisy-steps-horizontal'>
          <li className='daisy-step daisy-step-warning text-zinc-100'>
            Dados pessoais
          </li>
          <li className='daisy-step daisy-step-warning text-zinc-100'>
            Criar conta
          </li>
          <li className='daisy-step daisy-step-warning text-zinc-100'>
            Verificar conta
          </li>
        </ul>

        {/* <section className='flex items-center justify-start relative'>
          <div className='bg-slate-700 w-full h-2 text-transparent rounded absolute'></div>
          <div className='bg-[#FDEE00] w-1/3 h-2 text-transparent rounded absolute'>
            Progresso 1/3
          </div>
        </section> */}
      </header>

      <main className='h-[80vh] flex justify-around flex-col'>
        <div className='space-y-5 pt-24'>
          <span className='flex justify-center text-center'>
            Por favor, digite o código que <br /> enviamos agora para:
          </span>

          <span className='font-bold flex justify-center'>{userEmail}</span>

          <div className='flex justify-evenly lg:justify-center lg:gap-3 font-bold text-2xl'>
            <input
              onKeyUp={mudar}
              tabIndex={1}
              type='tel'
              maxLength={'1'}
              className='number_input daisy-input daisy-input-bordered daisy-input-success text-center p-0 w-10'
            />
            <input
              tabIndex={2}
              type='tel'
              maxLength={'1'}
              className='number_input daisy-input daisy-input-bordered daisy-input-success text-center p-0 w-10'
            />
            <input
              tabIndex={3}
              type='tel'
              maxLength={'1'}
              className='number_input daisy-input daisy-input-bordered daisy-input-success text-center p-0 w-10'
            />

            <span>-</span>

            <input
              tabIndex={4}
              type='tel'
              maxLength={'1'}
              className='number_input daisy-input daisy-input-bordered daisy-input-success text-center p-0 w-10'
            />
            <input
              tabIndex={5}
              type='tel'
              maxLength={'1'}
              className='number_input daisy-input daisy-input-bordered daisy-input-success text-center p-0 w-10'
            />
            <input
              tabIndex={6}
              type='tel'
              maxLength={'1'}
              className='number_input daisy-input daisy-input-bordered daisy-input-success text-center p-0 w-10'
            />
          </div>

          <span className='flex justify-center'>
            Não recebeu?{' '}
            <Link href='/api/send' className='underline pl-1'>
              Enviar novamente
            </Link>
          </span>
        </div>

        <div className='flex justify-end gap-7 px-5 py-6'>
          <button
            tabIndex={7}
            className='daisy-btn daisy-btn-primary'
            onClick={() => replace('/')}
          >
            Cancelar
          </button>
          <button tabIndex={7} className='daisy-btn daisy-btn-primary'>
            Finalizar
          </button>
        </div>
      </main>
    </>
  );
}
