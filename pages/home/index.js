'use client';

import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../../utils/db';
import { Suspense, useEffect, useState } from 'react';
import { parseCookies, destroyCookie } from 'nookies';
import CardEmprego from '../../components/CardEmprego';
import CardProfissionalSkeleton from '../../components/CardProfissionalSkeleton';

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);

  let { data: Usuarios_comum, error } = await supabase
    .from('Usuarios_comum')
    .select('*')
    .eq('Email', cookies.AuthEmail);

  let { data: Todos_Empregos, error_todos } = await supabase
    .from('Empregos')
    .select('*');

  return {
    props: {
      msg: '[SERVER] ola mundo',
      AuthEmail: cookies.AuthEmail || 'Não tem cookies',
      users: Usuarios_comum,
      todos: Todos_Empregos,
    },
  };
}

function deleteCookie() {
  destroyCookie(null, 'AuthEmail');
}

export default function Home(props) {
  // https://lh3.googleusercontent.com/a/ACg8ocIHk6MvlM8N1XNTwlWank2jYQ6y7tJuk9SWhf78GelQ1Fac7d0=s96-c
  const { data: session, status } = useSession();
  const [users, setUsers] = useState(props.users[0] || '');
  const [todos, setTodos] = useState(props.todos || '');

  const { replace, refresh, push } = useRouter();

  return (
    <>
      <Head>
        <title>Tela Home - Balcão Empregos</title>
      </Head>

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
                Balcão de Empregos
              </span>
            </header>

            <div className='bg-fotofundo bg-cover w-full h-52 mt-4 pl-4 pt-7'>
              <span className='text-4xl font-black text-gray-50 tracking-wide'>
                Balcão <br /> de <br /> Empregos
              </span>
            </div>
            <div>
              <div className='w-full h-12 text-lg bg-primary-red text-center font-bold py-2'>
                <span className='text-gray-50'>
                  Há 114 vaga(s) disponível(is)
                </span>
              </div>
              <div className='w-full bg-base-100 flex justify-center items-center shadow-xl my-5'>
                {/*  <Image
                      className=''
                      src='/check.svg'
                      width='100'
                      height='100'
                      alt='CheckSVG'
                    /> */}
                <div className='daisy-card-body w-full flex flex-col justify-center lg:w-1/2'>
                  <h2 className='card-titledaisy-footer-title font-semibold'>
                    Vagas de Emprego!
                  </h2>
                  <ul className='list-disc font-semibold'>
                    <li>Profissionais Qualificados</li>
                    <li>100% Seguro</li>
                    <li>100% Seguro</li>
                  </ul>
                </div>
              </div>

              <section className='flex justify-center flex-wrap'>
                <Suspense fallback={<CardProfissionalSkeleton />}>
                  <CardEmprego
                    JobRole={todos[0].JobRole}
                    Business={todos[0].Business}
                    DaysWeek={todos[0].Week}
                    Salary={todos[0].Salary}
                    Address={todos[0].Address}
                    Email={todos[0].Email}
                    Phone={todos[0].Phone}
                    Picture={todos[0].Photo}
                    chave={todos[0].id}
                    userId={users.id}
                    userOwner={todos[0].user_id}
                    deleteJob={async () => {
                      let { data, error } = await supabase
                        .from('Empregos')
                        .delete()
                        .eq('id', job.id);
                      refresh();
                    }}
                  />
                </Suspense>
              </section>

              {/* <div className='card card-compact w-96 bg-base-100 shadow-xl m-5'>
                <figure>
                  <img src='/fachada.jpg' alt='empresa1' />
                </figure>
                <div className='card-body'>
                  <h2 className='card-titledaisy-footer-title font-bold'>
                    Assistente Administrativo
                  </h2>
                  <span>Empresa: Ahuha Tecnologia</span>
                  <span>
                    Horario: <br /> Segunda a Sexta
                  </span>
                  <span>
                    Salário: <br /> R$ 1903
                  </span>
                  <div className='card-actions justify-end'>
                    <button className='btn btn-primary bg-primary-green'>
                      Interessado
                    </button>
                  </div>
                </div>
              </div>

              <div className='card card-compact w-96 bg-base-100 shadow-xl m-5'>
                <figure>
                  <img src='/fachada2.jpg' alt='empresa2' />
                </figure>
                <div className='card-body'>
                  <h2 className='card-titledaisy-footer-title font-bold'>
                    Design Gráfico
                  </h2>
                  <span>Empresa: Mercado Assis </span>
                  <span>
                    Horario: <br /> Segunda e Quarta
                  </span>
                  <span>
                    Salário: <br /> R$ 1460
                  </span>
                  <div className='card-actions justify-end'>
                    <button className='btn btn-primary bg-primary-green'>
                      Interessado
                    </button>
                  </div>
                </div>
              </div>

              <div className='card card-compact w-96 bg-base-100 shadow-xl m-5'>
                <figure>
                  <img src='/fachada3.jpg' alt='empresa3' />
                </figure>
                <div className='card-body'>
                  <h2 className='card-titledaisy-footer-title font-bold'>
                    Limpeza
                  </h2>
                  <span>Empresa: Dakota Calçados </span>
                  <span>
                    Horario: <br /> Segunda a Sábado
                  </span>
                  <span>
                    Salário: <br /> R$ 1412
                  </span>
                  <div className='card-actions justify-end'>
                    <button className='btn btn-primary bg-primary-green'>
                      Interessado
                    </button>
                  </div>
                </div>
              </div> */}

              <footer className='daisy-footer  bg-primary-blue text-gray-50 p-4'>
                <nav>
                  <h6 className='daisy-footer-title pt-2'>Informações</h6>
                  <a className='text-gray-50 text-pretty'>
                    Sobre nosso site, temos total autoria de utilizar de <br />
                    recursos nativo de bancos de dados de terceiros <br /> não
                    se preocupe ao expor suas informações.
                  </a>
                </nav>
                <nav>
                  <h6 className='daisy-footer-title'>Contato</h6>
                  <a className='text-gray-50'>
                    suporte.balcoodeempregos@gmail.com
                  </a>
                </nav>
                <nav>
                  <h6 className='daisy-footer-title'>Visite Nossas Páginas</h6>
                  <Link href='https://agendamento.meuvaptvupt.com.br/agendamento/'>
                    Vapt Vupt
                  </Link>
                  <Link href='https://www.gov.br/empresas-e-negocios/pt-br/empreendedor'>
                    Empreendedor
                  </Link>
                  <Link href='https://1mio.com.br/'>Jovem Aprendiz</Link>
                </nav>
              </footer>
            </div>
          </main>
        </div>
        <div className='daisy-drawer-side'>
          <label
            htmlFor='my-drawer'
            aria-label='close sidebar'
            className='daisy-drawer-overlay'
          ></label>

          <ul className='daisy-menu font-medium text-base p-4 w-80 min-h-full bg-base-200 text-base-content'>
            <div className='flex flex-col justify-start items-center gap-2 w-full'>
              <figure className='w-24 h-24 rounded-full overflow-hidden flex items-center justify-center'>
                {!users?.Name ? (
                  <Image src={'/fotoperfil1.png'} width={1200} height={1200} alt='' />
                ) : (
                  <Image
                    src={`${users.Picture}`}
                    width={1200}
                    height={1200}
                    alt=''
                    objectFit='cover'
                  />
                )}
              </figure>

              <span className='font-semibold text-base'>
                {!session?.user.name
                  ? !users?.Name
                    ? 'Inscreva-se para mais informações!'
                    : users.Nickname
                  : session.user.name}
              </span>
            </div>

            <li>
              <button onClick={() => push('/home')}>Inicio</button>
            </li>
            {users?.Name && (
              <li>
                <button onClick={() => push('/home/conta')}>Conta</button>
              </li>
            )}
            <li>
              <button onClick={() => push('/home/profissionais')}>
                Profissionais
              </button>
            </li>
            {users?.Name && (
              <li>
                <button onClick={() => push('/home/vagas')}>
                  Vagas de Emprego
                </button>
              </li>
            )}
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
