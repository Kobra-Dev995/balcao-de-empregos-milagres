import { parseCookies, destroyCookie } from 'nookies';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { supabase } from '../utils/db';

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

export default function SideBar({ children, props, NamePage,funcionalidade }) {
  const [user, setUser] = useState(props.user[0] || '');
  const { data: session, status } = useSession();

  console.log(funcionalidade);

  const { refresh, replace } = useRouter();

  return (
    <>
      <div className='daisy-drawer'>
        <input id='my-drawer' type='checkbox' className='daisy-drawer-toggle' />
        <div className='daisy-drawer-content'>
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
              {NamePage}
            </span>
          </header>
          {children}
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
                onClick={
                  funcionalidade
                //   () => {
                //   if (session?.user.name) {
                //     signOut();
                //   }

                //   if (user.Name) {
                //     {funcionalidade};
                //     refresh();
                //   }

                //   if (!session?.user.name && !user.Name) {
                //     replace('/');
                //   }
                // }
              }
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
