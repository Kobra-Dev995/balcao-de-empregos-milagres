export default function FiltroPesquisa() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className='daisy-btn'
        onClick={() => document.getElementById('my_modal_1').showModal()}
      >
        open modal
      </button>
      <dialog id='my_modal_1' className='daisy-modal'>
        <div className='daisy-modal-box'>
          <h3 className='font-bold text-lg px-4' >Filtrar Pesquisa</h3>
          <p className='py-4 px-4'>
            Press ESC key or click the button below to close
          </p>
          <div className='daisy-modal-action'>

            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='daisy-btn'>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
