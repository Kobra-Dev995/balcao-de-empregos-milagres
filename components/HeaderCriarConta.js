export default function HeaderConta() {
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
          <li className='daisy-step text-zinc-100'>Criar conta</li>
          <li className='daisy-step text-zinc-100'>Verificar conta</li>
        </ul>

        {/* <section className='flex items-center justify-start relative'>
          <div className='bg-slate-700 w-full h-2 text-transparent rounded absolute'></div>
          <div className='bg-[#FDEE00] w-1/3 h-2 text-transparent rounded absolute'>
            Progresso 1/3
          </div>
        </section> */}
      </header>
    </>
  );
}
