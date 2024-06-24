import { useState } from 'react';

export default function CriarConta() {
  const [telefone, setTelefone] = useState('');
  const [birthday, setBirthday] = useState('');

  function NextPage(e) {
    // e.preventDefault();
    const formData = new FormData(document.querySelector('#form'));

    const data = {
      name: formData.get('user_name'),
      tel: formData.get('user_telephone'),
      birthday: formData.get('user_birthday'),
      city: formData.get('user_city'),
    }
    
    console.log(data);
    return data;
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

  return (
    <>
      {}
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
      </header>

      <main className='w-full px-5 py-4 flex flex-col'>
        <form id='form' onSubmit={NextPage} method='POST' className='flex flex-col gap-5'>
          <section className='flex flex-col gap-5'>
            <span className='text-base font-bold'>
              Preencha os campos a seguir:
            </span>

            <input
              required
              type='text'
              placeholder='Nome Completo'
              name='user_name'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
            <input
              required
              type='text'
              onChange={handleBirthday}
              placeholder='Data de Nascimento'
              name='user_birthday'
              value={birthday}
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
            <input
              required
              type='text'
              onChange={handleTelefone}
              placeholder='Número de Celular'
              name='user_phone'
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
                defaultValue={'DEFAULT'}
                required
                name='user_city'
                className='daisy-select daisy-select-success w-full max-w-xs'
              >
                <option value='DEFAULT' disabled>
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
              name='user_neighborhood'
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
