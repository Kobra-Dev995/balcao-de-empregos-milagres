import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CriarConta() {
  const [telefone, setTelefone] = useState('');
  const [birthday, setBirthday] = useState('');
  const { push } = useRouter();

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
        name: formData.get('name'),
        birthday: formData.get('birthday'),
        phone: formData.get('phone'),
        city: formData.get('city'),
        neighborhood: formData.get('neighborhood'),
      }),
    });

    console.log('Enviado');

    if (response.status == 200) {
      console.log('API recebeu');
      push('/conta/criarconta2');
    } else {
      alert('Erro ao criar conta :(\nTente novamente mais tarde');
    }
  }

  function handleTelefone(event) {
    const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
    const tel = event.target.value.replace(/[^0-9]/g, '').slice(0, 11);
    const result = tel.replace(regex, '($1)$2-$3');
    setTelefone(result);
  }

  function dateOrganization(date) {
    const formate = date.split('/').join('-');
    const [dia, mes, ano] = formate.split('-');
    return `${dia.padStart(2, '0')}/${mes?.padStart(2, '0')}/${ano}`;
  }

  function handleBirthday(e) {
    const regex = /^([0-9]{1,2})([0-9]{1,2})([0-9]{4})$/;
    const date = e.target.value.replace(/[^0-9]/g, '').slice(0, 8);
    const result = date.replace(regex, '$1/$2/$3');
    setBirthday(result);
  }

  async function testeAPI() {
    const req = await fetch('/api/responseForm');
    const obj = JSON.parse(await req.text());
    console.log(obj);
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
          <li className='daisy-step text-zinc-100'>Criar conta</li>
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
            <span className='text-base font-bold'>
              Preencha os campos a seguir:
            </span>

            <input
              required
              type='text'
              placeholder='Nome Completo'
              name='name'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
            <input
              required
              type='text'
              onChange={handleBirthday}
              placeholder='Data de Nascimento'
              name='birthday'
              value={birthday}
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
            <input
              required
              type='text'
              onChange={handleTelefone}
              placeholder='Número de Celular'
              name='phone'
              value={telefone}
              autoComplete='true'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
          </section>

          <section className='flex flex-col gap-5 pt-5'>
            <span className='text-base font-semibold'>
              Região onde você mora:
            </span>

            <div className='flex flex-wrap gap-8'>
              <select
                defaultValue={'Milagres'}
                required
                name='city'
                className='daisy-select daisy-select-success w-full max-w-xs'
              >
                <option value='default' disabled>
                  Selecione a cidade
                </option>
                <option value={'Milagres'}>Milagres</option>
                <option value={'Barro'}>Barro</option>
                <option value={'Mauriti'}>Mauriti</option>
                <option value={'Abaiara'}>Abaiara</option>
              </select>
            </div>

            <input
              required
              type='text'
              placeholder='Bairro'
              name='neighborhood'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
          </section>

          <section className='w-full h-24 flex items-center justify-center p-5'>
            <button
              type='submit'
              className='w-9/12 bg-secundary-blue text-white text-base font-semibold rounded-xl px-4 py-2'
            >
              Continuar
            </button>
          </section>
        </form>
      </main>
    </>
  );
}
