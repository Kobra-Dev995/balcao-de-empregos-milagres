import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Conta() {
  const { data: session, status } = useSession();

  return (
    <>
      <div className='daisy-drawer'>
        <input id='my-drawer' type='checkbox' className='daisy-drawer-toggle' />
        <div className='daisy-drawer-content'>
          <main>
          <header className='flex justify-start gap-5 pt-3 pl-3 items-center'>
              <label htmlFor='my-drawer' className='cursor-pointer'>
                <svg
                  className='cursor-pointer'
                  width='28'
                  height='21'
                  viewBox='0 0 28 21'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 19H26M2 10.5H20M2 2H26'
                    stroke='black'
                    stroke-width='3'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </label>

              <span className='text-lg -webkit-font-smoothing: antialiased; font-bold '>
                Conta
              </span>
            </header>

            <div className='bg-fotoconta bg-cover w-full h-28 mt-4 pl-4 pt-7 '>
              <div className='w-24 rounded-full ml-4 mt-8'>
                <Image
                  alt='foto de perfil'
                  height={1200}
                  width={1200}
                  src='/fotoperfil1.png'
                />
              </div>
            </div>
            <div className='card-body'>
              <div className='flex justify-end'>
                <Image
                  src='/iconelapis.svg'
                  width='19'
                  height='19'
                  alt='Pessoa SVG'
                  onClick={() =>
                    document.getElementById('my_modal_4').showModal()
                  }
                />
              </div>
              <span>
                <h3 className='font-bold text-lg'>Nicolas André de Lima</h3>
                <a className='text-sm'>Bacharel em Ciencias da Computação</a>
              </span>
              <span>
                <h3 className='font-bold'>Área de Atuação:</h3>
                <a className='text-sm'>Gerente de Software</a>
              </span>
              <span>
                <h3 className='font-bold'>Localidade:</h3>
                <a className='text-sm'>
                  Rua José Afonso Bosco - Bairro Centro, 165
                </a>
              </span>
              <span>
                <h3 className='font-bold'>Descrição:</h3>
                <a className='text-sm'>
                  Me apaixonei desde cedo nessa área, e desenvolvi ótimas
                  habilidades. Espero agregar em diversas <br />
                  formas à empresa em que estarei trabalhando.
                </a>
              </span>
            </div>
            <span className='flex justify-center font-bold'>Avaliações</span>
            <div className='card lg:card-side shadow-xl m-4 bg-gray-100'>
              <div className='flex justify-center'>
                <Image
                  src='/avaliacao.jpg'
                  alt='Foto Avaliação'
                  className='rounded-md'
                  width='159'
                  height='119'
                />
              </div>

              <div className='card-body'>
                <h2 className='card-title'>Avaliação:</h2>
                <p>
                  Ótimo trabalho, porém deveria ter um pouco mais de simpatia
                  com o cliente.
                </p>
              </div>
            </div>

            <div className='card lg:card-side shadow-xl m-4 bg-gray-100'>
              <div className='flex justify-center'>
                <Image
                  src='/avaliacao2.jpg'
                  alt='Foto Avaliação'
                  className='rounded-md'
                  width='159'
                  height='119'
                />
              </div>

              <div className='card-body'>
                <h2 className='card-title'>Avaliação:</h2>
                <p>
                  Ótimo trabalho, porém deveria ter um pouco mais de simpatia
                  com o cliente.
                </p>
              </div>
            </div>
            <dialog id='my_modal_4' className='modal'>
              <div className='modal-box w-11/12 max-w-5xl'>
                <h3 className='font-bold text-lg pb-2'>Editar Conta</h3>
                <h4 className='font-semibold'>Nome*</h4>
                <input
                  type='text'
                  placeholder='Escreva Aqui'
                  className='input w-full max-w-xs'
                />
                <h4 className='font-semibold'>Sobrenome*</h4>
                <input
                  type='text'
                  placeholder='Escreva Aqui'
                  className='input w-full max-w-xs'
                />
                <h4 className='font-semibold pt-8'>Formação Acadêmica*</h4>
                <input
                  type='text'
                  placeholder='Escreva Aqui'
                  className='input w-full max-w-xs'
                />
                <h4 className='font-semibold'>Área de Atuação*</h4>
                <input
                  type='text'
                  placeholder='Escreva Aqui'
                  className='input w-full max-w-xs'
                />
                <h4 className='font-semibold'>Localidade*</h4>
                <input
                  type='text'
                  placeholder='Escreva Aqui'
                  className='input w-full max-w-xs'
                />
                <h4 className='font-semibold'>Descrição*</h4>
                <input
                  type='text'
                  placeholder='Escreva Aqui'
                  className='input w-full max-w-xs'
                />
                <div className='modal-action items-baseline'>
                  <form method='dialog'>
                    <button className='btn bg-primary-blue mr-4'>Fechar</button>
                    <button className='btn bg-primary-green'>Salvar</button>
                  </form>
                </div>
              </div>
            </dialog>
          </main>
        </div>
        <div className='daisy-drawer-side'>
          <label
            htmlFor='my-drawer'
            aria-label='close sidebar'
            className='daisy-drawer-overlay'
          ></label>

          <ul className='daisy-menu font-medium text-base p-4 w-80 min-h-full bg-base-200 text-base-content'>
            {/* Sidebar content here */}
            <div className='flex justify-start items-center gap-2 w-full'>
              <figure className='bg-blue-400'>
                {!session?.user.image ? (
                  <Image
                    src={`/fotoperfil.jpg`}
                    width='47'
                    height='47'
                    alt=''
                  />
                ) : (
                  <Image
                    src={`${session.user.image}`}
                    width='47'
                    height='47'
                    alt=''
                  />
                )}
              </figure>

              <span className='font-semibold text-base'>
                {!session?.user.image ? 'Seja bem vindo!' : session.user.name}
              </span>
            </div>

            <li>
              <Link href='/home'>Inicio</Link>
            </li>
            <li>
              <Link href='/home/conta'>Conta</Link>
            </li>
            <li>
              <Link href='/home/profissionais'>Profissionais</Link>
            </li>
            <li>
              <Link href='/home/vagas'>Vagas de Emprego</Link>
            </li>
            <li>
              <Link href='/home'>Configurações</Link>
            </li>
            <li>
              <Link href='https://agendamento.meuvaptvupt.com.br/agendamento/'>
                Vapt Vupt
              </Link>
            </li>
            <li>
              <Link href='https://1mio.com.br/'>
                Jovem Aprendiz
              </Link>
            </li>
            <li>
              <Link href='https://www.gov.br/empresas-e-negocios/pt-br/empreendedor'>
                Empreendedor
              </Link>
            </li>
            <li>
              <button onClick={() => signOut()}>Sair da Conta</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
