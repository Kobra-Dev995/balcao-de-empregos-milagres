export default function CriarConta() {
  return (
    <>
      <header className='bg-primary-green flex flex-col p-5'>
        <h1 className='text-white text-xl font-bold'>Criar Conta</h1>
        <span className='mt-4 text-white text-base my-2'>
          Processo para criar conta
        </span>
        <section className='flex items-center justify-start relative'>
          <div className='bg-slate-700 w-full h-2 text-transparent rounded absolute'></div>
          <div className='bg-[#FDEE00] w-1/3 h-2 text-transparent rounded absolute'>
            Progresso 1/3
          </div>
        </section>
      </header>

      <main className='w-full px-5 py-4 flex flex-col'>
        <section className='flex flex-col gap-5'>
          <span className='text-base font-bold'>
            Preencha os campos a seguir:
          </span>
          
          <form className='flex flex-col gap-5'>
            <input
              className='w-full border-black border-b-2 outline-none'
              type='text'
              placeholder='Nome Completo'
            />
            <input
              className='w-full border-black border-b-2 outline-none'
              type='text'
              placeholder='Data de Nascimento'
            />
            <input
              className='w-full border-black border-b-2 outline-none'
              type='text'
              placeholder='Telefone'
            />
          </form>
        </section>

        <section className='flex flex-col gap-5 pt-5'>
          <span className='text-base font-semibold'>
            Região onde você mora:
          </span>

          <div className='flex flex-wrap gap-8'>
            <select name='Estados'>
              <option value='CE' key='0'>
                Ceará
              </option>
              <option value='SP' key='1'>
                São Paulo
              </option>
            </select>

            <select name='Cidades'>
              <option value='abaiara' key='0'>
                Abaiara
              </option>
              <option value='barro' key='1'>
                Barro
              </option>
              <option value='crato' key='2'>
                Crato
              </option>
              <option value='milagres' key='3'>
                Milagres
              </option>
            </select>
            <input
              className='w-full border-black border-b-2 outline-none'
              type='text'
              placeholder='Endereço'
            />
          </div>
        </section>

        <section className='flex flex-col gap-5 pt-5'>
          <span className='text-base font-semibold'>Escolaridade:</span>
          <div>
            <select name='Escolaridade'>
              <option value='ensino_medio_completo' key='0'>
                Ensino Médio Completo
              </option>
              <option value='ensino_medio_incompleto' key='1'>
                Ensino Médio Incompleto
              </option>
            </select>
          </div>
        </section>

        <section className="w-full h-24 mt-20 flex items-center justify-center p-5">
          <button className='w-9/12 bg-secundary-blue text-white text-base font-semibold rounded-xl px-4 py-2'>Continuar</button>
        </section>
      </main>
    </>
  );
}
