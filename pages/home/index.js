import SideBar from '@/componets/SideBar';

export default function home() {
  return (
    <>
      <div className='daisy-drawer'>
        <input id='my-drawer' type='checkbox' className='daisy-drawer-toggle' />
        <div className='daisy-drawer-content'>
          <main>
            <header className='flex justify-start gap-5 pt-3 pl-3 items-center'>
              <label
                htmlFor='my-drawer'
              >
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
              <div className='card w-96 bg-base-100 shadow-xl m-5'>
                {/*  <Image
            className=''
            src='/check.svg'
            width='100'
            height='100'
            alt='CheckSVG'
          /> */}
                <div className='card-body'>
                  <h2 className='card-title font-semibold'>
                    Vagas de Emprego!
                  </h2>
                  <ul className='list-disc font-semibold'>
                    <li>Profissionais Qualificados</li>
                    <li>100% Seguro</li>
                    <li>100% Seguro</li>
                  </ul>
                </div>
              </div>

              <div className='card card-compact w-96 bg-base-100 shadow-xl m-5'>
                <figure>
                  <img src='/fachada.jpg' alt='empresa1' />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title font-bold'>
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
                  <img src='/fachada3.jpg' alt='empresa3' />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title font-bold'>Limpeza</h2>
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
              </div>

              <footer className='footer  bg-primary-blue text-gray-50'>
                <nav>
                  <h6 className='footer-title pt-2'>Informações</h6>
                  <a className='text-gray-50 text-pretty'>
                    Sobre nosso site, temos total autoria de utilizar de <br />
                    recursos nativo de bancos de dados de terceiros <br /> não
                    se preocupe ao expor suas informações.
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
                  <a className='link link-hover text-gray-50 underline'>
                    Cursos
                  </a>
                  <a className='link link-hover text-gray-50 underline'>
                    Jovem Aprendiz
                  </a>
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
          <ul className='daisy-menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
// ze bucetao
