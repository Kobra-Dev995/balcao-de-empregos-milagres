import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CriarConta() {
  function NextPage() {
    window.location.replace('./criarconta2');
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

      <main className='w-full px-5 py-4 flex flex-col'>
        <section className='flex flex-col gap-5'>
          <span className='text-base font-bold'>
            Preencha os campos a seguir:
          </span>

          <form className='flex flex-col gap-5'>
            <input
              required
              type='text'
              placeholder='Nome Completo'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
            <input
              required
              type='date'
              placeholder='Data de Nascimento'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
            <input
              required
              type='tel'
              placeholder='Número de Celular'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
              maxLength={'11'}
            />
          </form>
        </section>

        <section className='flex flex-col gap-5 pt-5'>
          <span className='text-base font-semibold'>
            Região onde você mora:
          </span>

          <div className='flex flex-wrap gap-8'>
            <select required className='select select-success w-full max-w-xs'>
              <option disabled selected>
                Selecione a cidade
              </option>
              <option>Milagres</option>
              <option>Barro</option>
              <option>Mauriti</option>
              <option>Abaiara</option>
            </select>

            <input
              type='text'
              placeholder='Endereço'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
          </div>
        </section>

        <section className='flex flex-col gap-5 pt-5'>
          <span className='text-base font-semibold'>Escolaridade:</span>
          <div>
            <form>
              <select
                required
                name='Escolaridade'
                className='select select-success w-full max-w-xs'
              >
                <option disabled selected>
                  Selecione o seu nível de escolaridade
                </option>
                <option value='ensino_medio_completo' key='0'>
                  Ensino Médio Completo
                </option>
                <option value='ensino_medio_incompleto' key='1'>
                  Ensino Médio Incompleto
                </option>
              </select>
            </form>
          </div>
        </section>

        <section className='w-full h-24 mt-20 flex items-center justify-center p-5'>
          <button
            type='submit'
            className='w-9/12 bg-secundary-blue text-white text-base font-semibold rounded-xl px-4 py-2'
            onClick={NextPage}
          >
            Continuar
          </button>
        </section>
      </main>
    </>
  );
}
