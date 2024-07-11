import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../../utils/db';
import { useRouter } from 'next/navigation';
import CardProfissional from '../../components/CardProfissional';
import CardProfissionalSkeleton from '../../components/CardProfissionalSkeleton';
import { padStart, split, toNumber, toLower } from 'lodash';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Suspense } from 'react';
import { parseCookies, destroyCookie } from 'nookies';

export async function getServerSideProps(ctx) {
  const cookies = parseCookies(ctx);

  let { data: Usuarios_comum, error } = await supabase
    .from('Usuarios_comum')
    .select('*')
    .eq('Email', cookies.AuthEmail);

  let { data: Todos_usuarios, error_todos } = await supabase
    .from('Usuarios_comum')
    .select('*');

  return {
    props: {
      msg: '[SERVER] ola mundo',
      AuthEmail: cookies.AuthEmail || 'Não tem cookies',
      user: Usuarios_comum,
      todos: Todos_usuarios,
    },
  };
}

function deleteCookie() {
  destroyCookie(null, 'AuthEmail');
}

export default function Profissionais(props) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(props.user[0] || '');
  const [todos, setTodos] = useState(props.todos || '');
  const [searchCar, setSearchCar] = useState('');

  const filterSearchUser = todos.filter((user) => {
    const userLowerCaseName = toLower(user.Name);
    const userLowerCaseCity = toLower(user.City);
    const searchLower = searchCar.toLowerCase();

    //console.log(userLowerCase);
    return (
      userLowerCaseName.includes(searchLower) ||
      userLowerCaseCity.includes(searchLower)
    );
  });

  const date = new Date();
  const day = date.getDate();
  const month = padStart(date.getMonth() + 1, 2, '0');
  const year = toNumber(date.getFullYear());
  const today = `${day}/${month}/${year}`;

  const userDate = split(user.Birthday, '/');

  const ageUser = year - toNumber(userDate[2]);

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
              <div className='daisy-dropdown daisy-dropdown-hover'>
                <div tabIndex={0} role='button' className='daisy-btn m-1'>
                  Filtrar
                </div>
                <ul
                  tabIndex={0}
                  className='daisy-dropdown-content z-[1] daisy-menu p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <span onClick={(e) => setSearchCar(e.target.innerHTML)}>
                      Abaiara
                    </span>
                  </li>
                  <li>
                    <span onClick={(e) => setSearchCar(e.target.innerHTML)}>
                      Barro
                    </span>
                  </li>
                  <li>
                    <span onClick={(e) => setSearchCar(e.target.innerHTML)}>
                      Mauriti
                    </span>
                  </li>
                  <li>
                    <span onClick={(e) => setSearchCar(e.target.innerHTML)}>
                      Milagres
                    </span>
                  </li>
                </ul>
              </div>

              <label className='input-rounded rounded-xl input flex items-center gap-2 mx-4'>
                <input
                  type='text'
                  className='input-rounded input border-x-0 rounded-none '
                  placeholder='Pesquisar Profissional'
                  onKeyDown={(e) => {
                    e.key === 'Enter' ? setSearchCar(e.target.value) : false;
                  }}
                />
                <FaMagnifyingGlass className='text-xl' />
              </label>
            </div>

            <section className='flex justify-center flex-wrap'>
              <Suspense fallback={<CardProfissionalSkeleton />}>
                {filterSearchUser.map((user) => {
                  if (user.ServiceType === 'Trabalhar') {
                    return (
                      <CardProfissional
                        key={user.id}
                        Name={user.Name}
                        Age={ageUser}
                        Occupation={user.OccupationArea}
                        City={user.City}
                        Neighborhood={user.Neighborhood}
                        Phone={user.Phone}
                        Email={user.Email}
                        Biography={user.Biography}
                      />
                    );
                  }
                })}
              </Suspense>
            </section>

            {/* <section className='w-full flex justify-center my-4'>
              <div className='daisy-join'>
                <input
                  className='daisy-join-item daisy-btn daisy-btn-square'
                  type='radio'
                  name='options'
                  aria-label='1'
                  defaultChecked
                />
                <input
                  className='daisy-join-item daisy-btn daisy-btn-square'
                  type='radio'
                  name='options'
                  aria-label='2'
                />
                <input
                  className='daisy-join-item daisy-btn daisy-btn-square'
                  type='radio'
                  name='options'
                  aria-label='3'
                />
                <input
                  className='daisy-join-item daisy-btn daisy-btn-square'
                  type='radio'
                  name='options'
                  aria-label='4'
                />
              </div>
            </section> */}

            <footer className='daisy-footer  bg-primary-blue text-gray-50 p-4'>
              <nav>
                <h6 className='daisy-footer-title pt-2'>Informações</h6>
                <a className='text-gray-50 text-pretty'>
                  Sobre nosso site, temos total autoria de utilizar de <br />
                  recursos nativo de bancos de dados de terceiros <br /> não se
                  preocupe ao expor suas informações.
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
                  ? !user?.Name
                    ? 'Inscreva-se para mais informações'
                    : user.Nickname
                  : session.user.name}
              </span>
            </div>

            <li>
              <Link href='/home'>Inicio</Link>
            </li>
            {user?.Name && (
              <li>
                <Link href='/home/conta'>Conta</Link>
              </li>
            )}
            <li>
              <Link href='/home/profissionais'>Profissionais</Link>
            </li>
            {user?.Name && (
              <li>
                <Link href='/home/vagas'>Vagas de Emprego</Link>
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

                  if (user.Name) {
                    deleteCookie();
                    refresh();
                  }

                  if (!session?.user.name && !user.Name) {
                    replace('/');
                  }
                }}
              >
                {!session?.user.name
                  ? !user?.Name
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
