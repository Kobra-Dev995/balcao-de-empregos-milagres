import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export let codigoAleatorio = ['0', '0', '0', '0', '0', '0'];
export default function CriarContaPasso3() {
  const [userEmail, setUserEmail] = useState();
  const [textButton, setTextButton] = useState();
  const [textButtonFinalizar, setTextButtonFinalizar] =
    useState('Código Incorreto');
  const [isLoading, setIsLoading] = useState(false);
  const { replace } = useRouter();

  function handleInput(e) {
    const input = e.target.value;
    if (input == codigoAleatorio.join('')) {
      setIsLoading(true);
      setTextButtonFinalizar('Código Correto');
      setTimeout(() => replace('/home'), 2000);
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

    testeAPI();

    async function sendCode() {
      if (userEmail) {
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
      } else {
        testeAPI();
      }
    }

    sendCode();
    console.log('codigo de verificação: ', codigoAleatorio.join(''));
    setTextButton('Enviar Novamente');
    setTimeout(() => {
      setTextButton('Enviar Código');
    }, 5000);
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

        <section className='w-full h-24 flex items-center justify-between p-5'>
          <div className='w-5/12 daisy-modal-action'>
            <form method='dialog' className='w-full'>
              <button className='w-full bg-secundary-blue text-white text-base font-semibold rounded-xl px-4 py-2'>
                Voltar
              </button>
            </form>
          </div>

          <button className='w-5/12 bg-secundary-blue text-white text-base font-semibold rounded-xl px-4 py-2'>
            {isLoading && (
              <span className='daisy-loading daisy-loading-dots daisy-loading-md'></span>
            )}
            {textButtonFinalizar}
          </button>
        </section>
      </main>
    </>
  );
}
