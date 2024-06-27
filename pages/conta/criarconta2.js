import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CriarContaPasso2() {
  const [passwordLetterM, setPasswordLetterM] = useState(false);
  const [passwordLetterm, setPasswordLetterm] = useState(false);
  const [passwordNumber, setPasswordNumber] = useState(false);
  const [passwordChar, setPasswordChar] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const { push } = useRouter();

  async function HandleSubmit(event) {
    event.preventDefault();

    if (
      passwordLetterM &&
      passwordLetterm &&
      passwordNumber &&
      passwordChar &&
      passwordLength
    ) {
      if (!passwordCheck) {
        alert('Confirme sua senha!');
        return;
      }

      const formData = new FormData(event.target);
      const response = await fetch('/api/responseForm', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname: formData.get('nickname'),
          email: formData.get('email'),
          password: formData.get('password'),
          serviceType: formData.get('serviceType'),
          bio: formData.get('bio'),
        }),
      });

      console.log('enviou');

      if (response.status == 200) {
        console.log('api recebeu');
        push('/conta/criarconta3');
      } else {
        alert('Erro ao criar conta :(\nTente novamente mais tarde');
      }
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  async function testeAPI() {
    const req = await fetch('/api/responseForm');

    console.log(JSON.parse(await req.text()));
  }

  function handlePassword(e) {
    const password = e.target.value;
    let passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_.])[\d\w\W]{8,}$/;
    const passwordLetterM1 = /^(?=.*[A-Z])[\d\w\W]{1,}$/;
    const passwordLetterm1 = /^(?=.*[a-z])[\d\w\W]{1,}$/;
    const passwordNumber1 = /^(?=.*[0-9])[\d\w\W]{1,}$/;
    const passwordChar1 = /^(?=.*[!@#$%^&*_])[\d\w\W]{1,}$/;
    const passwordLength1 = /^[\d\w\W]{8,}$/;

    if (passwordLetterM1.test(password)) {
      setPasswordLetterM(true);
    } else {
      setPasswordLetterM(false);
    }

    if (passwordLetterm1.test(password)) {
      setPasswordLetterm(true);
    } else {
      setPasswordLetterm(false);
    }

    if (passwordNumber1.test(password)) {
      setPasswordNumber(true);
    } else {
      setPasswordNumber(false);
    }

    if (passwordChar1.test(password)) {
      setPasswordChar(true);
    } else {
      setPasswordChar(false);
    }

    if (passwordLength1.test(password)) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }

    const result = passwordRegex.test(password);
  }

  function handlePasswordCheck(e) {
    const password1 = e.target.parentNode.childNodes[3].value;
    const passwordCheck1 = e.target.value;

    if (password1 === passwordCheck1) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  }

  function handleCurriculum(e) {
    let imgPreview = document.getElementById('imgpreview');
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function (event) {
        console.log(event.target.result);
        imgPreview.setAttribute('src', event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      imgPreview.setAttribute('src', '/logo-balcao-de-empregos.svg');
    }
  }

  function ShowPasswordUser() {
    const input = document.getElementById('Senha_User');

    if (input.type == 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }
  function togglePassCheck() {
    const input = document.getElementById('Senha_UserCheck');

    if (input.type == 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
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
          encType='multipart/form-data'
          className='flex flex-col gap-5'
        >
          <section className='flex flex-col gap-5'>
            <span className='text-base font-bold '>
              Preencha os campos a seguir:
            </span>

            <input
              required
              type='text'
              name='nickname'
              placeholder='Como Podemos Chama-lo?'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
            <input
              required
              type='email'
              name='email'
              placeholder='Digite seu email'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
            <input
              required
              id='Senha_User'
              type='password'
              onChange={handlePassword}
              placeholder='Criar uma Senha'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />

            <label className='form-control w-full max-w-lg flex flex-col'>
              <div className='form-field'>
                <div className='form-control justify-between'>
                  <label className='flex gap-2'>
                    <input
                      type='checkbox'
                      className='checkbox'
                      onChange={ShowPasswordUser}
                    />
                    <span>Mostrar Senha</span>
                  </label>
                </div>
              </div>
            </label>

            <div
              className={
                passwordLetterM &&
                passwordLetterm &&
                passwordNumber &&
                passwordChar &&
                passwordLength
                  ? 'text-[#20a714]'
                  : '' + 'text-[#A71414] flex flex-col'
              }
            >
              <span className='text-base font-semibold'>
                A senha deve conter:
              </span>
              <span className='text-sm flex flex-col'>
                <span
                  className={
                    passwordLetterM ? 'text-[#20a714]' : 'text-[#A71414]'
                  }
                >
                  Letras Maiúsculas
                </span>
                <span
                  className={
                    passwordLetterm ? 'text-[#20a714]' : 'text-[#A71414]'
                  }
                >
                  Letras Minúsculas
                </span>
                <span
                  className={
                    passwordNumber ? 'text-[#20a714]' : 'text-[#A71414]'
                  }
                >
                  Números
                </span>

                <span
                  className={passwordChar ? 'text-[#20a714]' : 'text-[#A71414]'}
                >
                  Símbolos
                </span>

                <span
                  className={
                    passwordLength ? 'text-[#20a714]' : 'text-[#A71414]'
                  }
                >
                  8 Caracteres
                </span>
              </span>
            </div>

            <input
              required
              type='password'
              name='password'
              placeholder='Repita a senha'
              onChange={handlePasswordCheck}
              className={`daisy-input daisy-input-bordered daisy-input-success w-full ${
                passwordCheck
                  ? 'border-green-700 focus:outline-green-700 focus:border-green-700'
                  : 'border-red-700 focus:outline-red-700 focus:border-red-700'
              }`}
            />
          </section>

          <section className='flex flex-col gap-5 pt-5'>
            <span className='text-base font-semibold'>
              Escolha o que deseja fazer:
            </span>
            <div className='flex gap-8'>
              <select
                required
                defaultValue={'Trabalhar'}
                name='serviceType'
                className='select select-success w-full max-w-xs'
              >
                <option disabled value={'default'}>
                  Selecione
                </option>
                <option value={'Trabalhar'}>Quero trabalhar</option>
                <option value={'Contratar'}>Quero contratar</option>
              </select>
            </div>

            <section className='flex flex-col items-center gap-5'>
              <span className='text-base font-semibold w-full'>Biografia:</span>
              <textarea
                required
                className='daisy-textarea daisy-textarea-success w-10/12'
                name='bio'
                cols={60}
                rows={8}
                placeholder='Escreva um pouco sobre você...'
              ></textarea>
              {/* <div className='bg-[#EAEDFF] w-full h-40 flex flex-col items-center justify-around rounded-md'>
                <input
                  className='cursor-pointer text-sm w-full h-full p-4'
                  type='file'
                  accept='image/*'
                  formEncType='multipart/form-data'
                  name='curriculum'
                  onChange={handleCurriculum}
                />
              </div>
              <div className='w-full flex flex-col items-center'>
                Selecione seu currículo no formato PDF
              </div> */}
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
