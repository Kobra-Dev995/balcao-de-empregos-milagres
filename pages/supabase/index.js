export default function Supabase() {
  const ola = 'ola';

  return (
    <>
      <div className='navbar rounded-lg'>
        <div className='navbar-start'>
          <a className='navbar-item'>Ripple UI</a>
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
      </div>

      <input type='checkbox' id='drawer-overlay' className='drawer-toggle' />

      <label htmlFor='drawer-overlay' className='btn btn-primary'>
        Open
      </label>
      <label className='overlay' htmlFor='drawer-overlay'></label>
      <div className='drawer'>
        <div className='drawer-content flex flex-col gap-4'>
          <label
            htmlFor='drawer-overlay'
            className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          >
            ✕
          </label>
          <section>
            <nav className='menu bg-gray-2 p-2 rounded-md'>
              <section className='menu-section'>
                <ul className='menu-items'>
                  <li className='menu-item'>General</li>
                  <li className='menu-item'>Teams</li>
                  <li className='menu-item'>Projects</li>
                  <li className='menu-item'>Calendar</li>
                </ul>
              </section>
            </nav>
          </section>
        </div>
      </div>
    </>
  );
}
