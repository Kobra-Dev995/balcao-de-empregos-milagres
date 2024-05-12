import Link from 'next/link';

export default function CriarContaPasso2() {
  return (
    <>
      <header className='bg-primary-green flex flex-col p-5'>
        <h1 className='text-white text-xl font-bold'>Criar Conta</h1>
        <span className='mt-4 text-white text-base my-2'>
          Processo para criar conta
        </span>
        <section className='flex items-center justify-start relative'>
          <div className='bg-slate-700 w-full h-2 text-transparent rounded absolute'></div>
          <div className='bg-[#FDEE00] w-2/3 h-2 text-transparent rounded absolute'>
            Progresso 1/3
          </div>
        </section>
      </header>

      <main>
        <span>Por favor, digite o código que enviamos agora para:</span>

        <span>exemplo@gmail.com</span>

        <div>
          <span>0</span>
          <span>1</span>
          <span>1</span>
          <span>-</span>
          <span>2</span>
          <span>6</span>
          <span>3</span>
        </div>

        <span>
          Não recebeu? <Link href=''>Eviar novamente</Link>
        </span>

        <button>Finalizar</button>
      </main>
    </>
  );
}
