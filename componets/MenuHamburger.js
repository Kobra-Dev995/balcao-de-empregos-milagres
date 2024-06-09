'use cliente'
import Image from 'next/image';
import Link from 'next/link';

export default function MenuPage({ children }) {
  return (
    <>
      <div className='daisy-drawer'>
        <input id='my-drawer' type='checkbox' className='daisy-drawer-toggle' />
        <div className='daisy-drawer-content'>{children}</div>
        <div className='daisy-drawer-side'>
          <label
            htmlFor='my-drawer'
            aria-label='close sidebar'
            className='daisy-drawer-overlay'
          ></label>

          <ul className='daisy-menu font-medium text-base p-4 w-80 min-h-full bg-base-200 text-base-content'>
            {/* Sidebar content here */}
            <div className='flex justify-start items-center gap-7p- w-full'>
              <Image src='/fotoPerfioTela.png' width='47' height='47' alt='foto' />
              <span className='font-semibold text-base'>Dr. Fran</span>
            </div>

            <li>
              <Link href='/home'>Inicio</Link>
            </li>
            <li>
              <Link href=''>Conta</Link>
            </li>
            <li>
              <Link href=''>Cursos</Link>
            </li>
            <li>
              <Link href='/home/profissionais'>Profissionais</Link>
            </li>
            <li>
              <Link href='/home/vagas'>Vagas de Emprego</Link>
            </li>
            <li>
              <Link href=''>Configurações</Link>
            </li>
            <li>
              <Link href='https://agendamento.meuvaptvupt.com.br/agendamento/'>
                Vapt Vupt
              </Link>
            </li>
            <li>
              <Link href='https://www.infojobs.com.br/vagas-de-emprego-jovem+aprendiz-em-milagres,-ce.aspx'>
                Jovem Aprendiz
              </Link>
            </li>
            <li>
              <Link href=''>Sair da Conta</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
