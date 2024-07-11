import Image from 'next/image';

export default function CardEmprego({ JobRole, Business, DaysWeek, Salary }) {
  return (
    <>
      <div className='daisy-card daisy-card-compact w-96 bg-zinc-200/20 shadow-xl m-5 flex flex-col items-center'>
        <figure className='w-full h-auto flex justify-center'>
          <Image
            src={'/fachada.jpg'}
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
          <div className='daisy-card-actions justify-end'>
            <button
              className='btn btn-primary bg-primary-green'
              onClick={() =>
                document.getElementById('modal_profissional').showModal()
              }
            >
              Ver Mais
            </button>
          </div>
        </div>

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
                <h3>{}</h3>
              </div>
              <div className='w-full'>
                <h4 className='font-semibold w-full text-start'>Idade:</h4>
                <h3>{}</h3>
              </div>
              <div className='w-full'>
                <h4 className='font-semibold w-full text-start'>Contato:</h4>
                <h3>{}</h3>
                <h3>{}</h3>
              </div>
              <div className='w-full'>
                <h4 className='font-semibold w-full text-start'>
                  Área de Atuação:
                </h4>
                <h3>{}</h3>
              </div>
              <div className='w-full'>
                <h4 className='font-semibold w-full text-start'>Sobre:</h4>
                <h3>{}</h3>
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
