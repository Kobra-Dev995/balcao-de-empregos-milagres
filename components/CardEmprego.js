import Image from 'next/image';

export default function CardEmprego({
  Picture,
  JobRole,
  Business,
  DaysWeek,
  Salary,
  Address,
  Email,
  Phone,
  chave,
  userId,
  userOwner,
  deleteJob,

}) {
  return (
    <>
      <div className='daisy-card daisy-card-compact w-96 min-h-96 bg-zinc-200/20 shadow-xl m-5 flex flex-col items-center'>
        <figure className='w-full h-auto flex justify-center'>
          <Image
            src={`${Picture}`}
            width={1000}
            height={1000}
            className='w-full'
            alt='Empresa'
          />
        </figure>

        <div className='daisy-card-body w-full'>
          <h2 className='daisy-card-title font-bold'>{JobRole}</h2>
          <span className='font-medium'>Empresa: {Business}</span>
          <span className='font-medium'>
            Dias da Semana: <br /> {DaysWeek}
          </span>
          <span className='font-medium'>
            Salário: <br /> R$ {Salary}
          </span>
          <div className='daisy-card-actions justify-between'>
            <div>
              {userId === userOwner && (
                <button
                  className='btn btn-error'
                  onClick={
                    
                    deleteJob
                  }
                >
                  Deletar
                </button>
              )}
            </div>
            <div>
              <button
                className='btn btn-primary bg-primary-green'
                onClick={() =>
                  document
                    .querySelector(`#modal_profissional${chave}`)
                    .showModal()
                }
              >
                Ver Mais
              </button>
            </div>
          </div>
        </div>

        <dialog id={`modal_profissional${chave}`} className='daisy-modal'>
          <div className='daisy-modal-box w-11/12 max-w-5xl flex flex-col'>
            <div className='w-full'>
              <h3 className='font-bold text-lg pb-2'>Dados do Emprego</h3>
            </div>

            <section className='w-full flex flex-col gap-4'>
              <div className='w-full'>
                <h4 className='font-semibold w-full text-start'>
                  Cargo de Trabalho:
                </h4>
                <h3>{JobRole}</h3>
              </div>
              <div className='w-full'>
                <h4 className='font-semibold w-full text-start'>Empresa:</h4>
                <h3>{Business}</h3>
              </div>
              <div className='w-full'>
                <h4 className='font-semibold w-full text-start'>
                  Dias da Semana:
                </h4>
                <h3>{DaysWeek}</h3>
              </div>
              <div className='w-full'>
                <h4 className='font-semibold w-full text-start'>Salário:</h4>
                <h3>{Salary}</h3>
              </div>
              <div className='w-full'>
                <h4 className='font-semibold w-full text-start'>Contato:</h4>
                <h3>{Phone}</h3>
                <h3>{Email}</h3>
              </div>
              <div className='w-full'>
                <h4 className='font-semibold w-full text-start'>Endereço:</h4>
                <h3>{Address}</h3>
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
      </div>
    </>
  );
}
