import Image from 'next/image';
import { useState } from 'react';
import ButtonLogin from '@/componets/ButtonLogin';
import { useRouter } from 'next/navigation';

export default function LoginScreen() {
  const [emailLogin, setEmailLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();
  const {push} = useRouter()

  function formSubmit(e) {
    e.preventDefault();

    setEmailLogin(e.target[0].value);
    setPasswordLogin(e.target[1].value);

    console.log(emailLogin, passwordLogin);
  }

  return (
    <>
      <main className='w-full min-h-screen flex flex-col justify-center p-5'>
        <section className='w-full p-4 flex justify-center items-center'>
          <Image
            src='./logo-balcao-de-empregos.svg'
            width='262'
            height='116'
            alt='Logo Balcão de Empregos Milagres-CE'
          />
        </section>

        <section className='w-full flex flex-col'>
          <section className='flex flex-col'>
            <span className='w-full font- text-base font-bold flex justify-center mb-4'>
              Já Possui uma conta?
            </span>

            <form className='flex items-center flex-col gap-3' onSubmit={formSubmit}>
              <label className='form-control w-full max-w-xs flex flex-col'>
                <div className='label'>
                  <span className='label-text pl-2 font-medium'>Email</span>
                </div>

                <label className='input input-bordered flex items-center gap-2'>
                  <input
                    type='text'
                    className='grow input w-full border-none'
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

              <label className='form-control w-full max-w-xs flex flex-col'>
                <div className='label'>
                  <span className='label-text pl-2 font-medium'>Senha</span>
                </div>

                <label className='input input-bordered flex items-center gap-2'>
                  <input
                    type='password'
                    className='grow input w-full border-none'
                    placeholder='********'
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

              <div className='w-full flex justify-center mt-3'>
                <input
                  className='cursor-pointer w-1/2 bg-primary-blue text-white font-bold px-4 py-2 rounded-lg'
                  type='submit'
                  value='Login'
                />
              </div>
            </form>
          </section>

          <section>
            <div className='w-full my-4 flex justify-center'>
              <span className='font-semibold text-base'>Ou</span>
            </div>

            <section className='w-full flex flex-col items-center gap-3'>
              <ButtonLogin Text='Google'>
                <Image src='./google-icon.svg' width='15' height='15' alt='' />
              </ButtonLogin>
            </section>
          </section>
          <div className='w-full flex justify-center my-4'>
            <span className='text-base font-medium'>
              Não tem uma conta?{' '}
              <button onClick={() => {push('/conta/criarconta')}} className='daisy-link daisy-link-info'>
                Cadastre-se
              </button>
            </span>
          </div>
        </section>

        {/*<section >
          <span>Políticas de privacidade • Termos de uso</span>
        </section>*/}
      </main>
    </>
  );
}
