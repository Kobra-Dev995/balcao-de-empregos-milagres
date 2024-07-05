import { supabase } from '@/utils/db';
import { useState } from 'react';

export default function Supabase() {
  const [filtro, setFiltro] = useState('');
  const [itemUpdate, setItemUpdate] = useState('');
  const [itemUpdateNew, setItemUpdateNew] = useState('');
  const [itemDelete, setItemDelete] = useState('');
  const [columnUpdate, setColumnUpdate] = useState('');
  const [columnDelete, setColumnDelete] = useState('');
  const [users, setUsers] = useState([]);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [biography, setBiography] = useState('');

  async function handleSelect(filtro) {
    let { data: Usuarios_comum, error } = await supabase
      .from('Usuarios_comum')
      .select('*');

    error ? console.warn(error.message) : setUsers(Usuarios_comum);
  }

  async function handleInsert(e) {
    const { data, error } = await supabase.from('Usuarios_comum').insert({
      Name: name,
      Birthday: birthday,
      Phone: phone,
      City: city,
      Neighborhood: neighborhood,
      Nickname: nickname,
      Email: email,
      Password: password,
      ServiceType: serviceType,
      Biography: biography,
    });

    error ? console.warn(error.message) : handleSelect();
  }

  async function handleUpdate() {

    const { data, error } = await supabase
      .from('Usuarios_comum')
      .update({ [columnUpdate]: itemUpdateNew })
      .eq(columnUpdate, itemUpdate);

    error ? console.warn(error.message) : handleSelect();
  }

  async function handleDelete() {
    const { data, error } = await supabase
      .from('Usuarios_comum')
      .delete()
      .eq(columnDelete, itemDelete);

    error ? console.warn(error.message) : handleSelect();
  }

  return (
    <>
      <header className='navbar rounded-lg'>
        <div className='navbar-start'>
          <a className='navbar-item'>Ripple UI</a>
          <label htmlFor='drawer-overlay' className='btn btn-primary'>
            Menu
          </label>
        </div>
        <div className='navbar-end'>
          <div className='avatar avatar-ring avatar-md'>
            <div className='dropdown-container'>
              <div className='dropdown'>
                <label
                  className='btn btn-ghost flex cursor-pointer px-0'
                  tabIndex='0'
                >
                  <img
                    src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
                    alt='avatar'
                  />
                </label>
                <div className='dropdown-menu dropdown-menu-bottom-left'>
                  <a className='dropdown-item text-sm'>Profile</a>
                  <a tabIndex='-1' className='dropdown-item text-sm'>
                    Account settings
                  </a>
                  <a tabIndex='-1' className='dropdown-item text-sm'>
                    Subscriptions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <input type='checkbox' id='drawer-overlay' className='drawer-toggle' />
      <label className='overlay' htmlFor='drawer-overlay'></label>
      <div className='drawer'>
        <div className='drawer-content flex flex-row-reverse'>
          <label
            htmlFor='drawer-overlay'
            className='btn btn-sm btn-circle btn-ghost '
          >
            ✕
          </label>

          <nav className='menu bg-gray-2 p-2 rounded-md pt-8'>
            <section className='menu-section'>
              <ul className='menu-items'>
                <li className='menu-item'>General</li>
                <li className='menu-item'>Teams</li>
                <li className='menu-item'>Projects</li>
                <li className='menu-item'>Calendar</li>
              </ul>
            </section>
          </nav>
        </div>
      </div>

      <main>
        <section className='w-full p-6 flex gap-4 flex-wrap-reverse justify-center'>
          <div className='w-96 flex flex-wrap gap-4 justify-center'>
            <div className='card'>
              <div className='card-body'>
                <h2 className='card-header'>Card CRUD - Read</h2>
                <ul className='flex flex-col gap-1'>
                  {users.map((user) => (
                    <li
                      key={user.id}
                      className='bg-gray-600/10 text-gray-800 rounded-md p-5'
                    >
                      Id: {user.id} <br />
                      Name: {user.Name}
                      <br />
                      Birthday: {user.Birthday}
                      <br />
                      Phone: {user.Phone}
                      <br />
                      City: {user.City}
                      <br />
                      Neighborhood: {user.Neighborhood}
                      <br />
                      Nickname: {user.Nickname}
                      <br />
                      Email: {user.Email}
                      <br />
                      Password: {user.Password}
                      <br />
                      ServiceType: {user.ServiceType}
                      <br />
                      Biography: {user.Biography}
                      <br />
                    </li>
                  ))}
                </ul>
                <div className='card-footer'>
                  <button className='btn-secondary btn' onClick={handleSelect}>
                    Read
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap gap-4 justify-center'>
            <div className='card'>
              <div className='card-body'>
                <h2 className='card-header'>Card CRUD - Create</h2>
                <div className='flex flex-col gap-3'>
                  <input
                    type='text'
                    placeholder='Nome'
                    className='input-ghost-primary input'
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Birthday'
                    className='input-ghost-primary input'
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Phone'
                    className='input-ghost-primary input'
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='City'
                    className='input-ghost-primary input'
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Neighborhood'
                    className='input-ghost-primary input'
                    onChange={(e) => setNeighborhood(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Nickname'
                    className='input-ghost-primary input'
                    onChange={(e) => setNickname(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Email'
                    className='input-ghost-primary input'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Password'
                    className='input-ghost-primary input'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='ServiceType'
                    className='input-ghost-primary input'
                    onChange={(e) => setServiceType(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Biography'
                    className='input-ghost-primary input'
                    onChange={(e) => setBiography(e.target.value)}
                  />
                </div>
                <div className='card-footer'>
                  <button className='btn-secondary btn' onClick={handleInsert}>
                    Create
                  </button>
                </div>
              </div>
            </div>

            <div className='card'>
              <div className='card-body'>
                <h2 className='card-header'>Card CRUD - Update</h2>
                <div className='flex flex-col gap-3'>
                  <input
                    type='text'
                    placeholder='Coluna para atualizar'
                    className='input-ghost-primary input'
                    onChange={(e) => setColumnUpdate(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Valor Antigo'
                    className='input-ghost-primary input'
                    onChange={(e) => setItemUpdate(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Valor para atualizar'
                    className='input-ghost-primary input'
                    onChange={(e) => setItemUpdateNew(e.target.value)}
                  />
                </div>
                <div className='card-footer'>
                  <button className='btn-secondary btn' onClick={handleUpdate}>
                    Update
                  </button>
                </div>
              </div>
            </div>

            <div className='card'>
              <div className='card-body'>
                <h2 className='card-header'>Card CRUD - Delete</h2>
                <div className='flex flex-col gap-3'>
                  <input
                    type='text'
                    placeholder='Coluna para deletar'
                    className='input-ghost-primary input'
                    onChange={(e) => setColumnDelete(e.target.value)}
                  />
                  <input
                    type='text'
                    placeholder='Valor para deletar'
                    className='input-ghost-primary input'
                    onChange={(e) => setItemDelete(e.target.value)}
                  />
                </div>
                <div className='card-footer'>
                  <button
                    className='btn-secondary btn'
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
