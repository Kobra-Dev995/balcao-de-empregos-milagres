import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '../../utils/db';
import { useEffect, useState } from 'react';
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

export default function Conta(props) {
  const { refresh, replace } = useRouter();
  const [users, setUsers] = useState(props.users[0] || '');

  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [biography, setBiography] = useState('');
  const [occupation, setOccupation] = useState('');
  const [passwordUser, setPasswordUser] = useState('');

  const [passwordLetterM, setPasswordLetterM] = useState(false);
  const [passwordLetterm, setPasswordLetterm] = useState(false);
  const [passwordNumber, setPasswordNumber] = useState(false);
  const [passwordChar, setPasswordChar] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  const { data: session, status } = useSession();

  async function testeAPI() {
    const req = await fetch('/api/responseForm');
    const obj = JSON.parse(await req.text());
    const lastObj = obj.pop();
    console.log(lastObj);

    setEmail(lastObj.email);
  }

  function handleBirthday(e) {
    const regex = /^([0-9]{1,2})([0-9]{1,2})([0-9]{4})$/;
    const date = e.target.value.replace(/[^0-9]/g, '').slice(0, 8);
    const result = date.replace(regex, '$1/$2/$3');
    setBirthday(result);
  }

  function handlePhone(event) {
    const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
    const tel = event.target.value.replace(/[^0-9]/g, '').slice(0, 11);
    const result = tel.replace(regex, '($1)$2-$3');
    setPhone(result);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleNeighborhood(event) {
    setNeighborhood(event.target.value);
  }

  function handleBiography(event) {
    setBiography(event.target.value);
  }

  function handleOccupation(event) {
    setOccupation(event.target.value);
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handleNickname(event) {
    setNickname(event.target.value);
  }

  function handlePassword(e) {
    const password = e.target.value;
    let passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_.])[\d\w\W]{8,}$/;
    const passwordLetterM1 = /^(?=.*[A-Z])[\d\w\W]{1,}$/;
    const passwordLetterm1 = /^(?=.*[a-z])[\d\w\W]{1,}$/;
    const passwordNumber1 = /^(?=.*[0-9])[\d\w\W]{1,}$/;
    const passwordChar1 = /^(?=.*[!@#$%^&*_])[\d\w\W]{1,}$/;
    const passwordLength1 = /^[\d\w\W]{8,}$/;

    if (passwordLetterM1.test(password)) {
      setPasswordLetterM(true);
    } else {
      setPasswordLetterM(false);
    }

    if (passwordLetterm1.test(password)) {
      setPasswordLetterm(true);
    } else {
      setPasswordLetterm(false);
    }

    if (passwordNumber1.test(password)) {
      setPasswordNumber(true);
    } else {
      setPasswordNumber(false);
    }

    if (passwordChar1.test(password)) {
      setPasswordChar(true);
    } else {
      setPasswordChar(false);
    }

    if (passwordLength1.test(password)) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }

    const result = passwordRegex.test(password);
  }

  async function handleSubmit(e) {
    if (
      name &&
      nickname &&
      passwordUser &&
      email &&
      city &&
      neighborhood &&
      birthday &&
      biography &&
      phone &&
      occupation
    ) {
      let { data, error } = await supabase
        .from('Usuarios_comum')
        .update({
          Name: name,
          Nickname: nickname,
          Password: passwordUser,
          Email: email,
          City: city,
          Neighborhood: neighborhood,
          Birthday: birthday,
          Biography: biography,
          Phone: phone,
          OccupationArea: occupation,
        })
        .eq('Email', props.AuthEmail);

      alert('Você fez as alterações com sucesso! :)');
      setTimeout(() => {
        refresh();
      }, 2000);

      setTimeout(() => {
        handleClose();
      }, 1000);
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  function handleClose() {
    setBirthday('');
    setPhone('');
    setCity('default');
    setNeighborhood('');
    setEmail('');
    setName('');
    setNickname('');
    setBiography('');
    setOccupation('');
    setPasswordUser('');
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
                Conta
              </span>
            </header>

            <div className='bg-fotoconta bg-cover w-full h-28 mt-4 pl-4 pt-7 '>
              <div className='w-24 rounded-full ml-4 mt-8'>
                <figure className='w-24'>
                  {!session?.user.image ? (
                    <Image
                      src='/fotoperfil1.png'
                      width={1200}
                      height={1200}
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
              </div>
            </div>

            <div className='card-body'>
              <div className='flex justify-end'>
                <button
                  className='daisy-btn-ghost rounded-lg p-3 flex items-center gap-3'
                  onClick={() =>
                    document.getElementById('my_modal_4').showModal()
                  }
                >
                  <span className='text-base font-medium'>Editar</span>
                  <Image src='/iconelapis.svg' width='19' height='19' alt='' />
                </button>
              </div>
              <span>
                <a className='text-sm'>
                  {!users?.Name ? 'Formação Acadêmica' : users.OccupationArea}
                </a>
                <h3 className='font-bold text-lg'>
                  {!users?.Name ? 'Nome Completo' : users.Name}
                </h3>
              </span>
              <span>
                <h3 className='font-bold'>Contato</h3>
                <a className='text-sm'>
                  {!users?.Name ? 'exemplo@gmail.com' : users.Email}
                </a>
                <br />
                <a className='text-sm'>
                  {!users?.Name ? '(__)_____-____' : users.Phone}
                </a>
              </span>
              <span>
                <h3 className='font-bold'>Área de Atuação:</h3>
                <a className='text-sm'>
                  {!users?.Name ? 'Profissão' : users.OccupationArea}
                </a>
              </span>
              <span>
                <h3 className='font-bold'>Localidade:</h3>
                <a className='text-sm'>
                  {!users?.Name ? '' : users.City}
                  {' - '}
                  {!users?.Name ? '' : users.Neighborhood}
                </a>
              </span>
              <span>
                <h3 className='font-bold'>Data de Nascimento:</h3>
                <a className='text-sm'>{!users?.Name ? '' : users.Birthday}</a>
              </span>
              <span>
                <h3 className='font-bold'>Descrição:</h3>
                <a className='text-sm'>
                  {!users?.Name ? 'Nenhuma descrição' : users.Biography}
                </a>
              </span>
            </div>

            {/* <div className='flex flex-wrap justify-center pb-12'>
              <span className='w-full flex justify-center font-bold'>Avaliações</span>

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
            </div> */}

            <dialog id='my_modal_4' className='daisy-modal'>
              <div className='daisy-modal-box w-11/12 max-w-5xl flex flex-col'>
                <div className='w-full'>
                  <h3 className='font-bold text-lg pb-2'>Editar Conta</h3>
                </div>

                <section className='w-full flex flex-col gap-4'>
                  <div className='w-full'>
                    {/* <div className='bg-[#EAEDFF] w-full h-40 flex flex-col items-center justify-around rounded-md'>
                <input
                  className='cursor-pointer text-sm w-full h-full p-4'
                  type='file'
                  accept='image/*'
                  formEncType='multipart/form-data'
                  name='curriculum'
                  onChange={function handleCurriculum(e) {
                    let imgPreview = document.getElementById('imgpreview');
                    if (e.target.files && e.target.files[0]) {
                      var reader = new FileReader();
                      reader.onload = function (event) {
                        console.log(event.target);
                        imgPreview.setAttribute('src', event.target.result);
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    } else {
                      imgPreview.setAttribute(
                        'src',
                        '/logo-balcao-de-empregos.svg'
                      );
                    }
                  }}
                />
              </div> */}
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>
                      Nome Completo
                    </h4>
                    <input
                      type='text'
                      placeholder='Jhon Doe'
                      onChange={handleName}
                      value={name}
                      className='input input-rounded input-ghost-primary w-full max-w-full'
                    />
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>Apelido</h4>
                    <input
                      type='text'
                      placeholder='Jhon'
                      onChange={handleNickname}
                      value={nickname}
                      className='input input-rounded input-ghost-primary w-full max-w-full'
                    />
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>Senha</h4>
                    <input
                      type='text'
                      placeholder='********'
                      onChange={handlePassword}
                      onKeyDown={(e) => setPasswordUser(e.target.value)}
                      className='input input-rounded input-ghost-primary w-full max-w-full'
                    />
                    <div
                      className={
                        passwordLetterM &&
                        passwordLetterm &&
                        passwordNumber &&
                        passwordChar &&
                        passwordLength
                          ? 'text-[#20a714]'
                          : '' + 'text-[#A71414] flex flex-col pl-4'
                      }
                    >
                      <span className='text-base font-semibold'>
                        A senha deve conter:
                      </span>
                      <span className='text-sm flex flex-col'>
                        <span
                          className={
                            passwordLetterM
                              ? 'text-[#20a714]'
                              : 'text-[#A71414]'
                          }
                        >
                          Letras Maiúsculas
                        </span>
                        <span
                          className={
                            passwordLetterm
                              ? 'text-[#20a714]'
                              : 'text-[#A71414]'
                          }
                        >
                          Letras Minúsculas
                        </span>
                        <span
                          className={
                            passwordNumber ? 'text-[#20a714]' : 'text-[#A71414]'
                          }
                        >
                          Números
                        </span>

                        <span
                          className={
                            passwordChar ? 'text-[#20a714]' : 'text-[#A71414]'
                          }
                        >
                          Símbolos
                        </span>

                        <span
                          className={
                            passwordLength ? 'text-[#20a714]' : 'text-[#A71414]'
                          }
                        >
                          8 Caracteres
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>
                      Data de Nascimento
                    </h4>
                    <input
                      type='text'
                      onChange={handleBirthday}
                      placeholder='01/01/2000'
                      value={birthday}
                      className='input input-rounded input-ghost-primary w-full max-w-full'
                    />
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>
                      Telefone
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

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>
                      Área de Atuação
                    </h4>
                    <input
                      type='text'
                      onChange={handleOccupation}
                      placeholder='Motorista'
                      value={occupation}
                      className='input input-rounded input-ghost-primary w-full max-w-full'
                    />
                  </div>

                  <div className='w-full'>
                    <h4 className='font-semibold w-full text-start'>
                      Biografia
                    </h4>
                    <input
                      type='text'
                      onChange={handleBiography}
                      placeholder='Conte mais sobre você...'
                      value={biography}
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
