import Link from 'next/link';

export default function CriarContaPasso2() {
  return (
    <>
      <header className='bg-primary-green flex flex-col p-5'>
        <h1 className='text-white text-xl font-bold'>Criar Conta</h1>
        <span className='mt-4 text-white text-base my-2'>
          Progresso para criar conta
        </span>
        <section className='flex items-center justify-start relative'>
          <div className='bg-slate-700 w-full h-2 text-transparent rounded absolute'></div>
          <div className='bg-[#FDEE00] w-2/3 h-2 text-transparent rounded absolute'>
            Progresso 1/3
          </div>
        </section>
      </header>

      <main className='h-[80vh] flex justify-between flex-col'>
        <div className='space-y-5 pt-32'>
          <span className='flex justify-center text-center'>
            Por favor, digite o código que <br /> enviamos agora para:
          </span>

          <span className='font-bold flex justify-center'>
            exemplo@gmail.com
          </span>

          <div className='flex justify-evenly font-bold text-2xl'>
            <span className=''>0</span>
            <span>0</span>
            <span>0</span>
            <span>-</span>
            <span>0</span>
            <span>0</span>
            <span>0</span>
          </div>

          <span className='flex justify-center'>
            Não recebeu?{' '}
            <Link href='' className='underline pl-1'>
              Enviar novamente
            </Link>
          </span>
        </div>

        <div className='flex justify-end px-5'>
          <button className='btn btn-primary '>Finalizar</button>
        </div>
      </main>
    </>
  );
}
