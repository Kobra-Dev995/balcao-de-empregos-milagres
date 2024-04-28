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

      <main className='w-full px-5 py-4 flex flex-col'>
        <section className='flex flex-col gap-5'>
          <span className='text-base font-bold '>
            Preencha os campos a seguir:
          </span>

          <form className='flex flex-col gap-5'>
            <input
              className='w-full border-black border-b-2 outline-none'
              type='text'
              placeholder='Como Podemos Chama-lo?'
            />
            <input
              className='w-full border-black border-b-2 outline-none'
              type='email'
              placeholder='Digite seu email'
            />
            <input
              className='w-full border-black border-b-2 outline-none'
              type='password'
              placeholder='Criar uma Senha'
            />

            <div className='text-[#A71414] flex flex-col'>
              <span className='text-base font-semibold'>
                A senha deve conter:
              </span>
              <span className='text-sm flex flex-col'>
                <span className='text-[#20a714]'>Letras Maiúsculas</span>
                <span>Letras Minúsculas</span>
                <span>Números</span>
                <span>Símbolos @ ! _ $</span>
              </span>
            </div>

            <input
              className='w-full border-black border-b-2 outline-none'
              type='password'
              placeholder='Repita a senha'
            />
          </form>
        </section>

        <section className='flex flex-col gap-5 pt-5'>
          <span className='text-base font-semibold'>
            Escolha o que deseja fazer:
          </span>
          <div className='flex gap-8'>
            <button className='border-slate-300 border-2 p-3 rounded-xl text-base font-medium bg-[#14A74F] text-white'>
              Quero trabalhar
            </button>
            <button className='border-slate-300 border-2 p-3 rounded-xl text-base font-normal text-black'>
              Quero Contratar
            </button>
          </div>

          <section className='flex flex-col gap-5'>
            <span className='text-base font-semibold'>Currículo:</span>
            <div className='bg-[#EAEDFF] w-full h-40 flex flex-col items-center justify-around rounded-md'>
              <input
                className='cursor-pointer text-sm w-full h-full p-4'
                type='file'
              />
            </div>
            <div className='w-full flex justify-center'>Selecione seu currículo no formato PDF</div>
          </section>
        </section>

        <section className='w-full h-24 flex items-center justify-center p-5'>
          <button className='w-9/12 bg-secundary-blue text-white text-base font-semibold rounded-xl px-4 py-2'>
            Continuar
          </button>
        </section>
      </main>
    </>
  );
}