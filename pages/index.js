import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';
import { supabase } from '../utils/db';
import { setCookie, parseCookies } from 'nookies';

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);

  let { data: Usuarios_comum, error } = await supabase
    .from('Usuarios_comum')
    .select('Email, Password');

  return {
    props: {
      msg: '[SERVER]',
      AuthEmail: cookies.AuthEmail || 'Não tem cookies',
      users: Usuarios_comum,
    },
  };
}

export default function LoginScreen(props) {
  const [emailLogin, setEmailLogin] = useState('');
  const [emailDB, setEmailDB] = useState(props.users || []);
  const [errorLogin, setErrorLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [textButtonLogin, setTextButtonLogin] = useState('Entrar');

  console.log(emailDB);
  console.log(emailDB);

  const { push } = useRouter();

  function Cookie(email) {
    setCookie(null, 'AuthEmail', email, {
      maxAge: 86400,
      path: '/',
    });
  }

  async function formSubmit(e) {
    e.preventDefault();

    let inputEmailValue = e.target[0].value;
    let inputPasswordValue = e.target[1].value;

    emailDB.forEach((user) => {
      if (user.Email === inputEmailValue) {
        if (user.Password != inputPasswordValue) {
          alert('Senha ou Email errado!');
          return;
        }

        Cookie(inputEmailValue);
        setIsLoading(false);
        push('/home');
      }
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }

  function togglePass() {
    const input = document.getElementById('Senha_User');

    if (input.type == 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }

  return (
    <>
      <main className='w-full min-h-screen flex flex-col justify-center p-5'>
        <section className='w-full min-h-80 p-4 gap-14 flex flex-col md:flex-row-reverse justify-center items-center'>
          <figure className='w-32 md:w-40'>
            <Image
              src='/SEMANA MEI.jpg'
              width='262'
              height='116'
              alt='Logo Balcão de Empregos Milagres-CE'
            />
          </figure>

          <figure className='w-72 md:w-56'>
            <Image
              src='/BALCAO DE EMPREGO.png'
              width='262'
              height='116'
              alt='Logo Balcão de Empregos Milagres-CE'
            />
          </figure>
        </section>

        <section className='w-full flex flex-col'>
          <section className='flex flex-col px-5'>
            <span className='w-full font- text-base font-bold flex justify-center mb-4'>
              Já Possui uma conta?
            </span>

            <form
              className='flex items-center flex-col gap-3'
              onSubmit={formSubmit}
            >
              <label className='form-control w-full max-w-lg flex flex-col'>
                <div className='label w-full '>
                  <span className='label-text pl-2 font-medium'>Email</span>
                </div>
                <label className='input max-w-full flex justify-between items-center gap-2'>
                  <input
                    type='text'
                    className='input rounded-none border-x-0 w-full'
                    placeholder='Digite aqui'
                    required
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    fill='currentColor'
                    className='w-4 h-4 opacity-70'
                  >
                    <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z' />
                    <path d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z' />
                  </svg>
                </label>
              </label>
              <label className='form-control w-full max-w-lg flex flex-col'>
                <div className='label w-full '>
                  <span className='label-text pl-2 font-medium'>Email</span>
                </div>
                <label className='input max-w-full flex justify-between items-center gap-2'>
                  <input
                    id='Senha_User'
                    type='password'
                    className='input rounded-none border-x-0 w-full'
                    placeholder='Senha'
                    required
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 16 16'
                    fill='currentColor'
                    className='w-4 h-4 opacity-70'
                  >
                    <path
                      fillRule='evenodd'
                      d='M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </label>
              </label>
              <label className='form-control w-full max-w-lg flex flex-col'>
                <div className='form-field'>
                  <div className='form-control justify-between'>
                    <label className='flex gap-2'>
                      <input
                        type='checkbox'
                        className='checkbox'
                        onChange={togglePass}
                      />
                      <span className='text-sm'>Mostrar Senha</span>
                    </label>
                    <label className='form-label'>
                      <Link
                        href='/conta/esqueceu'
                        className='link link-underline-hover link-primary text-sm'
                      >
                        Esqueceu a senha?
                      </Link>
                    </label>
                  </div>
                </div>
              </label>

              <label className='form-control w-full max-w-lg flex justify-center'>
                <button
                  type='submit'
                  className='text-base flex justify-center gap-4 items-center w-full cursor-pointer bg-primary-blue text-white font-bold px-4 py-2 rounded-lg'
                >
                  {isLoading && (
                    <span className='bg-emerald-300 daisy-loading daisy-loading-dots daisy-loading-md'></span>
                  )}{' '}
                  {textButtonLogin}
                </button>
              </label>
            </form>
            <span>{errorLogin}</span>
          </section>

          <section>
            <div className='w-full my-4 flex justify-center'>
              <span className='font-semibold text-base'>Ou</span>
            </div>

            <section className='w-full flex justify-center items-center gap-3'>
              {/* <button
                onClick={() => signIn('google', { callbackUrl: '/home' })}
                className='bg-[#EAEDFF] w-full max-w-lg flex items-center justify-center gap-2 text-base font-semibold py-2 px-5 rounded-lg'
                type='button'
              >
                <Image src='./google-icon.svg' width='15' height='15' alt='' />
                google
              </button> */}
            </section>
          </section>
          <div className='w-full flex flex-col gap-2 items-center my-4'>
            <div>
              <span className='text-base font-medium'>Não tem uma conta?</span>{' '}
              <Link
                href={'/conta/criarconta'}
                className='daisy-link daisy-link-info font-semibold'
              >
                Cadastre-se
              </Link>
            </div>

            <Link
              href={'/home/profissionais'}
              className='daisy-link daisy-link-info font-semibold'
            >
              Entrar de forma anônima
            </Link>
          </div>
        </section>

        {/*<section >
          <span>Políticas de privacidade • Termos de uso</span>
        </section>*/}
      </main>
    </>
  );
}
