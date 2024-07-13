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
  eventClick
}) {
  return (
    <>
      <div className='daisy-card daisy-card-compact w-96 bg-zinc-200/20 shadow-xl m-5 flex flex-col  items-center'>
      <figure className='w-28 h-28 rounded-full overflow-hidden flex items-center justify-center'>
      <Image
            src={Picture || '/'}
            width={1200}
            height={1200}
            objectFit='cover'
            className='w-full'
            alt=''
          />
        </figure>

        <div className='daisy-card-body w-full'>
          <h2 className='daisy-card-title font-bold'>{Occupation}</h2>
          <span className='font-medium'>
            Nome: <br /> {Name}
          </span>
          <span className='font-medium'>
            Idade: <br /> {Age}
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
              onClick={eventClick}
            >
              Ver Mais
            </button>
          </div>
        </div>

        
      </div>
    </>
  );
}
