export default function DialogCardProfissional({
  Name,
  Phone,
  Age,
  Email,
  OccupationArea,
  Biography,
}) {
  return (
    <>
      <dialog id='modal_profissional' className='daisy-modal'>
        <div className='daisy-modal-box w-11/12 max-w-5xl flex flex-col'>
          <div className='w-full'>
            <h3 className='font-bold text-lg pb-2'>
              Dados Pessoais do Profissional
            </h3>
          </div>

          <section className='w-full flex flex-col gap-4'>
            <div className='w-full'>
              <h4 className='font-semibold w-full text-start'>Nome:</h4>
              <h3>{Name}</h3>
            </div>
            <div className='w-full'>
              <h4 className='font-semibold w-full text-start'>Idade:</h4>
              <h3>{Age}</h3>
            </div>
            <div className='w-full'>
              <h4 className='font-semibold w-full text-start'>Contato:</h4>
              <h3>{Phone}</h3>
              <h3>{Email}</h3>
            </div>
            <div className='w-full'>
              <h4 className='font-semibold w-full text-start'>
                Área de Atuação:
              </h4>
              <h3>{OccupationArea}</h3>
            </div>
            <div className='w-full'>
              <h4 className='font-semibold w-full text-start'>Sobre:</h4>
              <h3>{Biography}</h3>
            </div>
          </section>

          <div className='daisy-modal-action w-full flex justify-center'>
            <form method='dialog' className='flex gap-5'>
              <button class='btn btn-outline-error' type='submit'>
                Fechar
              </button>
            </form>
          </div>
        </div>
      </dialog>
      ;
    </>
  );
}
