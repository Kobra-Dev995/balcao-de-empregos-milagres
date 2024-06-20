import next from 'next';
import Link from 'next/link';

export default function CriarContaPasso2() {

  function NextPage() {
    window.location.replace('/home');
  }

  return (
    <>
      <header className='bg-primary-green flex flex-col p-5'>
        <h1 className='text-white text-xl font-bold'>Criar Conta</h1>
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

          <span className='font-bold flex justify-center'>
            exemplo@gmail.com
          </span>

          <div className='flex justify-evenly lg:justify-center lg:gap-3 font-bold text-2xl'>
            <input
              type='tel'
              maxLength={'1'}
              className='daisy-input daisy-input-bordered daisy-input-success text-center p-0 w-10'
            />
            <input
              type='tel'
              maxLength={'1'}
              className='daisy-input daisy-input-bordered daisy-input-success text-center p-0 w-10'
            />
            <input
              type='tel'
              maxLength={'1'}
              className='daisy-input daisy-input-bordered daisy-input-success text-center p-0 w-10'
            />

            <span>-</span>

            <input
              type='tel'
              maxLength={'1'}
              className='daisy-input daisy-input-bordered daisy-input-success text-center p-0 w-10'
            />
            <input
              type='tel'
              maxLength={'1'}
              className='daisy-input daisy-input-bordered daisy-input-success text-center p-0 w-10'
            />
            <input
              type='tel'
              maxLength={'1'}
              className='daisy-input daisy-input-bordered daisy-input-success text-center p-0 w-10'
            />
            {/* <span className=''>0</span>
            <span>0</span>
            <span>-</span>
            <span>0</span>
            <span>0</span>
            <span>0</span> */}
          </div>

          <span className='flex justify-center'>
            Não recebeu?{' '}
            <Link href='' className='underline pl-1'>
              Enviar novamente
            </Link>
          </span>
        </div>

        <div className='flex justify-end px-5 py-6'>
          <button className='daisy-btn daisy-btn-primary' onClick={NextPage}>Finalizar</button>
        </div>
      </main>
    </>
  );
}
