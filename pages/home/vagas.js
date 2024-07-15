import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '../../utils/db';
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import CardEmprego from '../../components/CardEmprego';
import CardProfissionalSkeleton from '../../components/CardProfissionalSkeleton';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { toLower } from 'lodash';

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
      user: Usuarios_comum,
      todos: Todos_Empregos,
    },
  };
}

function deleteCookie() {
  destroyCookie(null, 'AuthEmail');
}

export default function Vagas(props) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(props.user[0] || '');
  const [todos, setTodos] = useState(props.todos || '');
  const [searchCar, setSearchCar] = useState('');

  const [pictureJob, setPictureJob] = useState('/');
  const [jobRole, setJobRole] = useState('');
  const [business, setBusiness] = useState('');
  const [daysWeek, setDaysWeek] = useState('');
  const [salary, setSalary] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('default');

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

  const { refresh, replace, push } = useRouter();

  function handleJobRole(event) {
    setJobRole(event.target.value);
  }

  function handleBusiness(event) {
    setBusiness(event.target.value);
  }

  function handleDaysWeek(event) {
    setDaysWeek(event.target.value);
  }

  function handleSalary(event) {
    setSalary(event.target.value);
  }

  function handlePhone(event) {
    setPhone(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleNeighborhood(event) {
    setNeighborhood(event.target.value);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleClose() {
    setJobRole('')
    setEmail('')
    setNeighborhood('')
    setPhone('')
    setBusiness('')
    setDaysWeek('')
    setSalary('')
    setCity('default')
  }

  async function handleSubmit(e) {
    if (
      jobRole &&
      email &&
      neighborhood &&
      phone &&
      business &&
      daysWeek &&
      salary
    ) {
      let { data, error } = await supabase.from('Empregos').insert({
        user_id: user.id,
        Photo: pictureJob,
        JobRole: jobRole,
        Business: business,
        Week: daysWeek,
        Salary: salary,
        Phone: phone,
        Email: email,
        Address: neighborhood,
        City: city,
      });

      alert('Você criou um emprego com sucesso com sucesso! :)');
      setTimeout(() => {
        handleClose();
      }, 1000);

      setTimeout(() => {
        refresh();
      }, 2000);

    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  async function handleDeleteJob(event){
    let { data, error } = await supabase.from('Empregos').delete().eq('id', job.id);

  }

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
                Vagas de Empregos
              </span>
            </header>

            <div className='flex justify-between mt-7 items-center px-5'>
              <div className='flex justify-center items-center'>
                {user.ServiceType === 'Contratar' && (<button
                  className='daisy-btn bg-red-400 text-white hover:bg-red-600 rounded-2xl'
                  onClick={() =>
                    document.getElementById('my_modal').showModal()
                  }
                >
                  Criar Vaga
                </button>)}
              </div>
              <div className='flex justify-center items-center'>
                <div className='daisy-dropdown daisy-dropdown-hover'>
                  <div tabIndex={0} role='button' className='daisy-btn m-1'>
                    Filtrar
                  </div>
                  <ul
                    tabIndex={0}
                    className='daisy-dropdown-content z-[1] daisy-menu p-2 shadow bg-base-100 rounded-box w-52'
                  >
                    <li>
                      <span onClick={(e) => setSearchCar('')}>Todos</span>
                    </li>
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
            </div>

            <dialog id='my_modal' className='daisy-modal'>
              <div className='daisy-modal-box w-11/12 max-w-5xl flex flex-col'>
                <div className='w-full'>
                  <h3 className='font-bold text-lg pb-2'>Editar Conta</h3>
                </div>

                <section className='w-full flex flex-col gap-4'>
                  <div className='w-full'>
                    <label htmlFor='inputFile' className='cursor-pointer'>
                      <figure className='w-24 h-24 rounded-full overflow-hidden flex items-center justify-center'>
                        <Image
                          src={`${pictureJob}`}
                          width={1200}
                          height={1200}
                          alt=''
                          objectFit='cover'
                        />
                      </figure>
                      <span>Adicionar Foto</span>
                    </label>
                    <input
                      type='file'
                      accept='image/*'
                      id='inputFile'
                      formEncType='multipart/form-data'
                      name='image_file'
                      className='hidden fixed left-0'
                      onChange={function handleCurriculum(e) {
                        if (e.target.files && e.target.files[0]) {
                          var reader = new FileReader();
                          reader.onload = async function (event) {
                            //console.log(event.target.result);

                            setPictureJob(event.target.result);
                          };
                          reader.readAsDataURL(e.target.files[0]);
                        } else {
                          alert('Erro ao carregar imagem! :(');
                          setPictureJob('/');
                        }
                      }}
                    />
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>
                      Cargo de Trabalho
                    </h4>
                    <input
                      type='text'
                      placeholder='Assistente Financeiro'
                      onChange={handleJobRole}
                      value={jobRole}
                      className='input input-rounded input-ghost-primary w-full max-w-full'
                    />
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>Empresa</h4>
                    <input
                      type='text'
                      placeholder='Negócios Todavida'
                      onChange={handleBusiness}
                      value={business}
                      className='input input-rounded input-ghost-primary w-full max-w-full'
                    />
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>
                      Dias na Semana
                    </h4>
                    <input
                      type='text'
                      onChange={handleDaysWeek}
                      placeholder='Segunda a Sábado'
                      value={daysWeek}
                      className='input input-rounded input-ghost-primary w-full max-w-full'
                    />
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>Salário</h4>
                    <input
                      type='text'
                      onChange={handleSalary}
                      placeholder='1.368,00'
                      value={salary}
                      className='input input-rounded input-ghost-primary w-full max-w-full'
                    />
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>
                      Telefone para Contato
                    </h4>
                    <input
                      type='text'
                      onChange={handlePhone}
                      placeholder='(88)92426-6543'
                      value={phone}
                      className='input input-rounded input-ghost-primary w-full max-w-full'
                    />
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>Email</h4>
                    <input
                      type='text'
                      onChange={handleEmail}
                      placeholder='exemplo@gmail.com'
                      value={email}
                      className='input input-rounded input-ghost-primary w-full max-w-full'
                    />
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>Cidade</h4>
                    <select
                      class='select select-ghost-primary'
                      defaultValue={'default'}
                      onChange={handleCity}
                    >
                      <option value='default' disabled>
                        Selecione outra cidade
                      </option>
                      <option value={'Milagres'}>Milagres</option>
                      <option value={'Barro'}>Barro</option>
                      <option value={'Mauriti'}>Mauriti</option>
                      <option value={'Abaiara'}>Abaiara</option>
                    </select>
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>
                      Endereço
                    </h4>
                    <input
                      type='text'
                      onChange={handleNeighborhood}
                      placeholder='Rua Manoel, centro - 231'
                      value={neighborhood}
                      className='input input-rounded input-ghost-primary w-full max-w-full'
                    />
                  </div>
                </section>

                <div className='daisy-modal-action w-full flex justify-center'>
                  <form method='dialog' className='flex gap-5'>
                    <button
                      class='btn btn-outline-success'
                      type='button'
                      onClick={handleSubmit}
                    >
                      Salvar
                    </button>
                    <button
                      class='btn btn-outline-error'
                      type='submit'
                      onClick={handleClose}
                    >
                      Fechar
                    </button>
                  </form>
                </div>
              </div>
            </dialog>

            <section className='flex justify-center flex-wrap'>
              <Suspense fallback={<CardProfissionalSkeleton />}>
                {filterSearchUser.map((job) => {
                  
                    return (
                      <CardEmprego
                        key={job.id}
                        JobRole={job.JobRole}
                        Business={job.Business}
                        DaysWeek={job.Week}
                        Salary={job.Salary}
                        Address={job.Address}
                        Email={job.Email}
                        Phone={job.Phone}
                        Picture={job.Photo}
                        chave={job.id}
                        userId={user.id}
                        userOwner={job.user_id}
                        deleteJob={async () =>{
                          let { data, error } = await supabase.from('Empregos').delete().eq('id', job.id);
                          refresh()
                        }}
                      />
                    );
                  
                })}
              </Suspense>
            </section>

            <footer className='daisy-footer bg-primary-blue text-gray-50 p-4'>
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
              <button onClick={() => push('/home')}>Inicio</button>
            </li>
            {user?.Name && (
              <li>
                <button onClick={() => push('/home/conta')}>Conta</button>
              </li>
            )}
            <li>
              <button onClick={() => push('/home/profissionais')}>
                Profissionais
              </button>
            </li>
            {user?.Name && (
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
