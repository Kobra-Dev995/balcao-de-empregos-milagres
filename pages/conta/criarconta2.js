import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CriarContaPasso2() {
  function NextPage() {
    window.location.replace('./criarconta3');
  }

  async function HandleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch('/api/responseForm', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nickname: formData.get('user_nickname'),
        email: formData.get('user_email'),
        password: formData.get('user_password'),
        typeJob: formData.get('user_typeJob'),
        cv: formData.get('user_cv')
      }),
    });

    if (response.status == 200) {
      push('/conta/criarconta3');
    } else {
      alert('Erro ao criar conta :(\nTente novamente mais tarde');
    }
  }

  async function testeAPI() {
    const req = await fetch('/api/responseForm');
    console.log(JSON.parse(await req.text()));
  }

  return (
    <>
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
          <li className='daisy-step text-zinc-100'>Verificar conta</li>
        </ul>
      </header>

      <main className='w-full px-5 py-4 flex flex-col'>
        <form
          id='form'
          onSubmit={HandleSubmit}
          method='POST'
          className='flex flex-col gap-5'
        >
          <section className='flex flex-col gap-5'>
            <span className='text-base font-bold '>
              Preencha os campos a seguir:
            </span>

            <input
              type='text'
              name='user_nickname'
              placeholder='Como Podemos Chama-lo?'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
            <input
              type='email'
              name='user_email'
              placeholder='Digite seu email'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
            <input
              type='password'
              placeholder='Criar uma Senha'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
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
              type='password'
              name='user_password'
              placeholder='Repita a senha'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
          </section>

          <section className='flex flex-col gap-5 pt-5'>
            <span className='text-base font-semibold'>
              Escolha o que deseja fazer:
            </span>
            <div className='flex gap-8'>
              <select
                defaultValue={'Trabalhar'}
                name='user_typeJob'
                className='select select-success w-full max-w-xs'
              >
                <option disabled value={'default'}>
                  Selecione
                </option>
                <option value={'Trabalhar'} selected>
                  Quero trabalhar
                </option>
                <option value={'Contratar'}>Quero contratar</option>
              </select>
            </div>

            <section className='flex flex-col gap-5'>
              <span className='text-base font-semibold'>Currículo:</span>
              <div className='bg-[#EAEDFF] w-full h-40 flex flex-col items-center justify-around rounded-md'>
                <input
                  className='cursor-pointer text-sm w-full h-full p-4'
                  type='file'
                  name='user_cv'
                />
              </div>
              <div className='w-full flex justify-center'>
                Selecione seu currículo no formato PDF
              </div>
            </section>
          </section>

          <section className='w-full h-24 flex items-center justify-center p-5'>
            <button
              className='w-9/12 bg-secundary-blue text-white text-base font-semibold rounded-xl px-4 py-2'
              type='submit'
            >
              Continuar
            </button>
          </section>
        </form>
      </main>
    </>
  );
}
