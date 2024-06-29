import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export let codigoAleatorio = ['0', '0', '0', '0', '0', '0'];
export default function CriarContaPasso2() {
  const [userEmail, setUserEmail] = useState();
  const [textButton, setTextButton] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { replace } = useRouter();

  function handleInput(e) {
    const input = e.target.value;
    if (input == codigoAleatorio.join('')) {
      setIsLoading(true);
      replace('/home');
    }
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  }

  async function testeAPI() {
    const req = await fetch('/api/responseForm');
    const obj = JSON.parse(await req.text());
    console.log(obj);

    if (obj[1] != undefined) {
      setUserEmail(obj[1].email);
    }
  }

  function SendCodeToEmail() {
    codigoAleatorio.length = 0;
    const random = () => Math.floor(Math.random() * 10);

    for (let i = 0; i < 6; i++) {
      codigoAleatorio.push(random());
    }

    async function sendCode() {
      const res = await fetch('/api/nodemailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          code: codigoAleatorio.join(''),
        }),
      });
    }

    sendCode();
    //console.log('codigo de verificação: ', codigoAleatorio.join(''));
    setTextButton('Enviar Novamente');
  }

  useEffect(() => {
    setTextButton('Enviar Código');
    testeAPI();
  }, []);

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
      </header>

      <main className='h-[80vh] flex justify-around flex-col'>
        <div className='space-y-5 pt-24'>
          <span className='flex justify-center text-center'>
            Por favor, digite o código que <br /> enviamos agora para:
          </span>

          <span className='font-bold flex justify-center'>{userEmail}</span>

          <div className='flex justify-evenly lg:justify-center lg:gap-3 font-bold text-2xl'>
            <input
              onKeyUp={handleInput}
              tabIndex={1}
              type='tel'
              maxLength={6}
              className='number_input daisy-input daisy-input-bordered daisy-input-success text-center p-0 w-40 tracking-wide'
            />
            {/* <input
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
            /> */}
          </div>

          <span className='flex gap-2 justify-center'>
            <span>Não recebeu?</span>
            <button onClick={SendCodeToEmail} className='daisy-btn-link'>
              {textButton}
            </button>
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
            {isLoading && <span className='daisy-loading daisy-loading-dots daisy-loading-md'></span>}
            Finalizar
          </button>
        </div>
      </main>
    </>
  );
}
