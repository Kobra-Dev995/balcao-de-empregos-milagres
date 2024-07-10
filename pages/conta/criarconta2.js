import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CriarContaPasso3 from './criarconta3';

export default function CriarContaPasso2({
  name,
  phone,
  birthday,
  city,
  neighborhood,
}) {
  const [passwordLetterM, setPasswordLetterM] = useState(false);
  const [passwordLetterm, setPasswordLetterm] = useState(false);
  const [passwordNumber, setPasswordNumber] = useState(false);
  const [passwordChar, setPasswordChar] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [passwordUser, setPasswordUser] = useState('');
  const [textButtonFinalizar, setTextButtonFinalizar] =
    useState('Finalizar Cadastro');
  const [isLoading, setIsLoading] = useState(false);

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [bio, setBio] = useState('');
  const [occupation, setOccupation] = useState('');

  const { replace } = useRouter();

  const [verificationEmail, setVerificationEmail] = useState(false);

  async function handleSubmit(event) {
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

      const response = await fetch('/api/responseForm', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          birthday: birthday,
          city: city,
          neighborhood: neighborhood,
          nickname: nickname,
          email: email,
          password: passwordUser,
          serviceType: serviceType,
          occupation: occupation,
          biography: bio,
        }),
      });

      console.log('enviou');

      if (response.status == 200) {
        console.log('api recebeu');
        // setVerificationEmail(true);
        // setTimeout(() => {
        //   setVerificationEmail(false);
        // }, 1000);
        // document.getElementById('my_modal_2').showModal();
        setIsLoading(true);
        setTextButtonFinalizar('Finalizando');
        setTimeout(() => replace('/'), 2000);
      } else {
        alert('Erro ao criar conta :(\nTente novamente mais tarde');
      }
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  async function testeAPI() {
    const req = await fetch('/api/responseForm');
    const obj = JSON.parse(await req.text());
    console.log(obj);
    const ultimo = obj.pop();
    //const filtrado = obj.filter((x) => x.name.trim().length > 0);
    console.log(ultimo);
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
      setPasswordUser(password1);
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
      setPasswordUser('');
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

  function handleNickname(event) {
    setNickname(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleServiceType(event) {
    setServiceType(event.target.value);
  }

  function handleBio(event) {
    setBio(event.target.value);
  }

  function handleOccupation(event) {
    setOccupation(event.target.value);
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
          {/* <li className='daisy-step text-zinc-100'>Verificar conta</li> */}
        </ul>
      </header>

      <main className='w-full px-5 py-4 flex flex-col'>
        {/* <dialog id='my_modal_2' className='daisy-modal'>
          <div className='daisy-modal-box p-0 w-screen max-w-full h-screen max-h-full rounded-none'>
            <CriarContaPasso3
              email={email}
              verificationEmail={verificationEmail}
            />
          </div>
        </dialog> */}

        <section className='flex flex-col gap-5'>
          <section className='flex flex-col gap-5'>
            <span className='text-base font-bold '>
              Preencha os campos a seguir:
            </span>

            <input
              required
              type='text'
              onChange={handleNickname}
              name='nickname'
              value={nickname}
              placeholder='Como Podemos Chama-lo?'
              className='daisy-input daisy-input-bordered daisy-input-success w-full'
            />
            <input
              required
              type='email'
              onChange={handleEmail}
              name='email'
              value={email}
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
              onChange={handlePasswordCheck}
              name='password'
              placeholder='Repita a senha'
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
                defaultValue={'default'}
                onChange={handleServiceType}
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
                onChange={handleBio}
                value={bio}
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
              <span className='text-base font-semibold w-full'>
                Área de Atuação:
              </span>
              <input
                required
                type='text'
                onChange={handleOccupation}
                name='occupation'
                value={occupation}
                placeholder='Motorista'
                className='daisy-input daisy-input-bordered daisy-input-success w-full'
              />
            </section>
          </section>

          <section className='w-full h-24 flex items-center justify-between p-5'>
            {/* <button
              className='w-5/12 bg-secundary-blue text-white text-base font-semibold rounded-xl px-4 py-2'
              type='button'
              onClick={() => replace('/')}
            >
              Cancelar
            </button> */}

            {/* <button
              className='w-5/12 bg-secundary-blue text-white text-base font-semibold rounded-xl px-4 py-2'
              onClick={HandleSubmit}
              >
              Continuar
            </button> */}

            <div className='w-5/12 daisy-modal-action'>
              <form method='dialog' className='w-full'>
                <button className='w-full bg-secundary-blue text-white text-base font-semibold rounded-xl px-4 py-2'>
                  Voltar
                </button>
              </form>
            </div>

            <button
              type='button'
              className='cursor-pointer flex items-center justify-center gap-3 w-5/12 bg-secundary-blue text-white text-base font-semibold rounded-xl px-4 py-2'
              onClick={handleSubmit}
            >
              {isLoading && (
                <span className='daisy-loading daisy-loading-dots daisy-loading-md'></span>
              )}
              {textButtonFinalizar}
            </button>
          </section>
        </section>
      </main>
    </>
  );
}
