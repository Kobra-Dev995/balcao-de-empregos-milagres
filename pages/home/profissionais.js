import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../../utils/db';
import { parseCookies, destroyCookie } from 'nookies';
import { useRouter } from 'next/navigation';

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);

  let { data: Usuarios_comum, error } = await supabase
    .from('Usuarios_comum')
    .select('*')
    .eq('Email', cookies.AuthEmail);

  return {
    props: {
      msg: '[SERVER] ola mundo',
      AuthEmail: cookies.AuthEmail || 'Não tem cookies',
      users: Usuarios_comum,
    },
  };
}

function deleteCookie() {
  destroyCookie(null, 'AuthEmail');
}

export default function Profissionais(props) {
  const { data: session, status } = useSession();
  const [users, setUsers] = useState(props.users[0] || '');

  const { refresh, replace } = useRouter();

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
                Profissionais
              </span>
            </header>

            <div className='flex justify-end mt-7 items-center'>
              <div className='daisy-dropdown'>
                <div tabIndex={0} role='button' className='daisy-btn m-1'>
                  Filtrar
                </div>
                <ul
                  tabIndex={0}
                  className='daisy-dropdown-content z-[1] daisy-menu p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <a>Milagres</a>
                  </li>
                  <li>
                    <a>Barro</a>
                  </li>
                </ul>
              </div>

              <label className='outline-none input input-bordered flex items-center gap-2 mx-4'>
                <input
                  type='text'
                  className='grow'
                  placeholder='Buscar Profissionais'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='w-4 h-4 opacity-70'
                >
                  <path
                    fillRule='evenodd'
                    d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                    clipRule='evenodd'
                  />
                </svg>
              </label>
            </div>

            <div className='card card-compact w-96 bg-base-100 shadow-xl m-5'>
              <div className='w-full flex justify-center rounded-full mt-4'>
                <img src='/fotoperfil.jpg' />
              </div>

              <div className='card-body'>
                <h2 className='card-title font-bold'>Engenheiro de Software</h2>
                <span>
                  Nome: <br /> Nicolas André de Lima
                </span>
                <span>
                  Idade: <br /> 34 Anos
                </span>
                <span>
                  Formação: <br /> Engenharia de Software
                </span>
                <span>
                  Endereço: <br /> Rua Manoel gomes da silva - Bairro Blue Pen
                </span>
                <div className='card-actions justify-end'>
                  <Link href='' className='btn btn-primary bg-primary-green'>
                    Ver Mais
                  </Link>
                </div>
              </div>
            </div>

            <div className='card card-compact w-96 bg-base-100 shadow-xl m-5'>
              <div className='w-24 rounded-full ml-[75%] mt-4'>
                <img src='/fotoperfil2.jpg' />
              </div>

              <div className='card-body'>
                <h2 className='card-title font-bold'>
                  Assistente de métricas humanas
                </h2>
                <span>
                  Nome: <br /> Davi Cunha Montante
                </span>
                <span>
                  Idade: <br /> 29 Anos
                </span>
                <span>
                  Formação: <br /> Gestão de recursos humanos
                </span>
                <span>
                  Endereço: <br /> Rua Manoel gomes da silva - Bairro Blue Pen
                </span>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary bg-primary-green'>
                    Ver Mais
                  </button>
                </div>
              </div>
            </div>

            <div className='card card-compact w-96 bg-base-100 shadow-xl m-5'>
              <div className='w-24 rounded-full ml-[75%] mt-4'>
                <img src='/fotoperfil3.jpg' />
              </div>

              <div className='card-body'>
                <h2 className='card-title font-bold'>
                  Supervisor de diretrizes centrais
                </h2>
                <span>
                  Nome: <br /> Reinaldo Cerqueira de souza
                </span>
                <span>
                  Idade: <br /> 43 Anos
                </span>
                <span>
                  Formação: <br /> Administração de Empresas
                </span>
                <span>
                  Endereço: <br /> Rua Manoel gomes da silva - Bairro Blue Pen
                </span>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary bg-primary-green'>
                    Ver Mais
                  </button>
                </div>
              </div>
            </div>
            <div className='join flex justify-center my-12'>
              <input
                className='join-item btn btn-square'
                type='radio'
                name='options'
                aria-label='1'
                checked
              />
              <input
                className='join-item btn btn-square'
                type='radio'
                name='options'
                aria-label='2'
              />
              <input
                className='join-item btn btn-square'
                type='radio'
                name='options'
                aria-label='3'
              />
              <input
                className='join-item btn btn-square'
                type='radio'
                name='options'
                aria-label='4'
              />
            </div>

            <footer className='footer  bg-primary-blue text-gray-50'>
              <nav>
                <h6 className='footer-title pt-2'>Informações</h6>
                <a className='text-gray-50 text-pretty'>
                  Sobre nosso site, temos total autoria de utilizar de <br />
                  recursos nativo de bancos de dados de terceiros <br /> não se
                  preocupe ao expor suas informações.
                </a>
              </nav>
              <nav>
                <h6 className='footer-title'>Contato</h6>
                <a className='text-gray-50'>
                  suporte.balcãodeempregos@gmail.com
                </a>
              </nav>
              <nav>
                <h6 className='footer-title'>Visite Nossas Páginas</h6>
                <a className='link link-hover text-gray-50 underline'>
                  Vapt Vupt
                </a>
                <a className='link link-hover text-gray-50 underline'>Cursos</a>
                <a className='link link-hover text-gray-50 underline'>
                  Jovem Aprendiz
                </a>
              </nav>
            </footer>
          </main>
        </div>
        <div className='daisy-drawer-side'>
          <label
            htmlFor='my-drawer'
            aria-label='close sidebar'
            className='daisy-drawer-overlay'
          ></label>

          <ul className='daisy-menu font-medium text-base p-4 w-80 min-h-full bg-base-200 text-base-content'>
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
                {!session?.user.name
                  ? !users?.Name
                    ? 'Seja Bem-vindo!'
                    : users.Nickname
                  : session.user.name}
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
            {/* <li>
              <Link href='/home'>Configurações</Link>
            </li> */}
            <li>
              <Link href='https://agendamento.meuvaptvupt.com.br/agendamento/'>
                Vapt Vupt
              </Link>
            </li>
            <li>
              <Link href='https://1mio.com.br/'>Jovem Aprendiz</Link>
            </li>
            <li>
              <Link href='https://www.gov.br/empresas-e-negocios/pt-br/empreendedor'>
                Empreendedor
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  if (session?.user.name) {
                    signOut();
                  }

                  if (users.Name) {
                    deleteCookie();
                    refresh();
                  }

                  if (!session?.user.name && !users.Name) {
                    replace('/');
                  }
                }}
              >
                {!session?.user.name
                  ? !users?.Name
                    ? 'Entrar'
                    : 'Sair'
                  : 'Sair'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
