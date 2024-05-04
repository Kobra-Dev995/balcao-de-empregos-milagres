import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

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

            <form className='flex flex-col gap-3'>
              <input
                className='w-full border-b-black  border-b-2 outline-none pt-2 pb-1'
                type='text'
                placeholder='Email'
              />
              <div className='flex'>
                <input
                  className='w-full border-b-black  border-b-2 outline-none pt-2 pb-1'
                  type='password'
                  placeholder='Senha'
                />
                <button className='bg-white flex items-center border-b-black border-b-2 px-3'>
                  <Image
                    src='./Open padlock.svg'
                    width='14'
                    height='14'
                    alt=''
                  />
                </button>
              </div>
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
              <button
                className='bg-[#EAEDFF] w-10/12 flex items-center justify-center gap-2 text-base font-semibold py-2 rounded-lg'
                type='button'
              >
                <Image src='./google-icon.svg' width='15' height='15' alt='' />
                Google
              </button>

              <button
                className='bg-[#EAEDFF] w-10/12 flex items-center justify-center gap-2 text-base font-semibold py-2 rounded-lg'
                type='button'
              >
                <Image
                  src='./facebook-icon.svg'
                  width='15'
                  height='15'
                  alt=''
                />
                Facebook
              </button>
            </section>
          </section>
          <div className='w-full flex justify-center my-4'>
            <span className='text-base'>
              Não tem uma conta?{' '}
              <Link
                className='text-primary-blue underline'
                href='./conta/criarconta'
              >
                Cadraste-se
              </Link>
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
