export default function principal() {
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
            Profissionais
          </span>
        </header>

        <div className='flex justify-end mt-7 items-center'>
          <label className='input input-bordered flex items-center gap-2 mx-4'>
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
          <div className='w-24 rounded-full ml-[75%] mt-4'>
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
              <button className='btn btn-primary bg-primary-green'>
                Ver Mais
              </button>
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
