import Image from 'next/image';
import Link from 'next/link';

export default function vagas() {
  return (
    <>
      <main>
        <header className='flex justify-start gap-5 pt-3 pl-3 items-center'>
          <svg
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

          <span className='text-lg -webkit-font-smoothing: antialiased; font-bold '>
            Vagas de Emprego
          </span>
        </header>

        <div className='flex justify-end mt-7 items-center'>
          <label className='input input-bordered flex items-center gap-2 mx-4'>
            <input type='text' className='grow' placeholder='Buscar Empregos' />
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
          <div className='dropdown dropdown-bottom dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn m-1 bg-primary-green rounded-3xl'
            >
              Filtrar
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>Milagres</a>
              </li>
              <li>
                <a>Brejo Santo</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='card card-compact w-96 bg-base-100 shadow-xl m-5'>
          <figure>
            <img src='/fachada.jpg' alt='empresa1' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title font-bold'>Assistente Administrativo</h2>
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
            <h2 className='card-title font-bold'>Design Gráfico</h2>
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
            <img src='/fachada4.png' alt='empresa4' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title font-bold'>Mercados GIN</h2>
            <span>Empresa: Soga ATM </span>
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
            <a className='text-gray-50'>suporte.balcãodeempregos@gmail.com</a>
          </nav>
          <nav>
            <h6 className='footer-title'>Visite Nossas Páginas</h6>
            <a className='link link-hover text-gray-50 underline'>Vapt Vupt</a>
            <a className='link link-hover text-gray-50 underline'>Cursos</a>
            <a className='link link-hover text-gray-50 underline'>
              Jovem Aprendiz
            </a>
          </nav>
        </footer>
      </main>
    </>
  );
}
