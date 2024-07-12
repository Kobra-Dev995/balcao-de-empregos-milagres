import Image from 'next/image';

export default function CardProfissional({
  Name,
  Age,
  Occupation,
  City,
  Neighborhood,
  Phone,
  Email,
  Biography,
  Picture,
}) {
  return (
    <>
      <div className='daisy-card daisy-card-compact w-96 bg-zinc-200/20 shadow-xl m-5 flex flex-col  items-center'>
      <figure className='w-28 h-28 rounded-full overflow-hidden flex items-center justify-center'>
      <Image
            src={Picture || '/fotoperfil.jpg'}
            width={1200}
            height={1200}
            objectFit='cover'
            className='w-full'
            alt='Foto do profissional'
          />
        </figure>

        <div className='daisy-card-body w-full'>
          <h2 className='daisy-card-title font-bold'>{Occupation}</h2>
          <span className='font-medium'>
            Nome: <br /> {Name}
          </span>
          <span className='font-medium'>
            Área de Atuação: <br /> {Occupation}
          </span>
          <span className='font-medium'>
            Endereço: <br /> {City} - {Neighborhood}
          </span>

          <br />

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
                <h3>{Occupation}</h3>
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
      </div>
    </>
  );
}
