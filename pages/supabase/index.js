import { supabase } from '@/utils/db';
import { useState } from 'react';

export default function Supabase() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();

  async function handleSelect(e) {
    let { data: Pessoas, error } = await supabase.from('Pessoas').select('*');

    console.log(Pessoas);
    setUsers(Pessoas);
  }

  async function handleInsert(e) {
    const { data, error } = await supabase
      .from('Pessoas')
      .insert({ nome: name, age: age });

    handleSelect()
  }

  return (
    <>
      <header className='navbar rounded-lg'>
        <div className='navbar-start'>
          <a className='navbar-item'>Ripple UI</a>
          <label htmlFor='drawer-overlay' className='btn btn-primary'>
            Open
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
        <section className='w-full p-6 flex flex-wrap gap-4 '>
            <div className='card'>
              <div className='card-body'>
                <h2 className='card-header'>Card CRUD - select</h2>
                <ul className='text-content2'>
                  {users.map((user) => (
                    <li key={user.user_id}>
                      {user.nome} - {user.age}
                    </li>
                  ))}
                </ul>
                <div className='card-footer'>
                  <button className='btn-secondary btn' onClick={handleSelect}>
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-body'>
                <h2 className='card-header'>Card CRUD - Insert</h2>
                <div className='flex flex-col gap-3'>
                  <input type='text' placeholder='Nome' className="input-ghost-primary input" onChange={(e) => setName(e.target.value)} />
                  <input type='number' placeholder='Idade' className="input-ghost-primary input" onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className='card-footer'>
                  <button className='btn-secondary btn' onClick={handleInsert}>
                    Insert
                  </button>
                </div>
              </div>
            </div>
        </section>
      </main>
    </>
  );
}
