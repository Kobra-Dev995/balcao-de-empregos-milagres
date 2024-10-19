import { useState, useRef } from 'react';
import { supabase } from '../../utils/db';
import { useRouter } from 'next/navigation';

export default function Esqueceu() {
  const [email, setEmail] = useState('');
  const [codigo, setCodigo] = useState('');
  const buttonSendCode = useRef();
  const [passwordUser, setPasswordUser] = useState('');

  const [passwordLetterM, setPasswordLetterM] = useState(false);
  const [passwordLetterm, setPasswordLetterm] = useState(false);
  const [passwordNumber, setPasswordNumber] = useState(false);
  const [passwordChar, setPasswordChar] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  const { replace } = useRouter();
  async function updatePassword() {
    let { data, error } = await supabase
      .from('Usuarios_comum')
      .update({
        Password: passwordUser,
      })
      .eq('Email', email);

    replace('/');
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

  function handleInput(e) {
    const input = e.target.value;

    if (input == codigo) {
      document.getElementById('cod_modal').showModal();
    }
  }

  async function gerarSequenciaAleatoria() {
    const sequencia = [];
    for (let i = 0; i < 6; i++) {
      sequencia.push(Math.floor(Math.random() * 10));
    }
    console.log(sequencia.join(''));

    setCodigo(sequencia.join(''));
  }

  async function sendCode() {
    buttonSendCode.current.setAttribute('disabled', '');

    const res = await fetch('/api/nodemailer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        code: codigo, //codigoAleatorio.join(''),
      }),
    });

    console.log(email, codigo);

    setTimeout(() => {
      buttonSendCode.current.removeAttribute('disabled');
    }, 5000);
  }

  return (
    <>
      <header className='bg-primary-green flex flex-col p-5'>
        <h1 className='text-white text-xl font-bold'>Recuperação da Conta</h1>
        <span className='mt-4 text-white text-base my-2'>
          Processo para recuperar a conta
        </span>
      </header>

      <p className='p-4'>
        Digite o email vinculado a sua conta, para fazer a recuperação da sua
        senha.
      </p>

      <div className='flex flex-col gap-2 p-4'>
        <label className='daisy-input daisy-input-bordered flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='h-4 w-4 opacity-70'
          >
            <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
            <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
          </svg>
          <input
            type='text'
            className=''
            placeholder='Email'
            onChange={(prevState) => {
              gerarSequenciaAleatoria(), setEmail(prevState.target.value);
            }}
            value={email}
          />
        </label>

        <button className='daisy-btn' ref={buttonSendCode} onClick={sendCode}>
          Enviar código
        </button>

        <label className='daisy-input daisy-input-bordered flex items-center gap-2'>
          <input
            type='number'
            className=''
            placeholder='código'
            onChange={handleInput}
          />
        </label>
      </div>

      <dialog id='cod_modal' className='daisy-modal'>
        <div className='daisy-modal-box'>
          <div className='w-full'>
            <h4 className='font-semibold w-full text-start'>Senha</h4>
            <input
              type='text'
              placeholder='********'
              onChange={handlePassword}
              onKeyUp={(prevState) => setPasswordUser(prevState.target.value)}
              className='input input-rounded input-ghost-primary w-full max-w-full'
            />
            <div
              className={
                passwordLetterM &&
                passwordLetterm &&
                passwordNumber &&
                passwordChar &&
                passwordLength
                  ? 'text-[#20a714]'
                  : '' + 'text-[#A71414] flex flex-col pl-4'
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
          </div>

          <div className='daisy-modal-action'>
            <form method='dialog'>
              {passwordLetterM &&
                passwordLetterm &&
                passwordNumber &&
                passwordChar &&
                passwordLength && (
                  <button className='daisy-btn' onClick={updatePassword}>
                    Finalizar
                  </button>
                )}
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
