import Link from 'next/link';

export default function CriarContaPasso2() {
  return (
    <>
      <ul>
        <li>
          <Link href='/conta/criarconta2'>voltar</Link>
        </li>
        <li>
          <Link href='/'>home</Link>
        </li>
      </ul>
      <header>
        <h1>Criar Conta</h1>
        <span>Processo para criar conta</span>
        <div className='w-3/3 bg-black h-3px rounded-2xl'></div>
      </header>
      <main>

        <span>Por favor, digite o código que enviamos agora para:</span>

        <span>exemplo@gmail.com</span>

        <div>
          <span>0</span>
          <span>1</span>
          <span>1</span>
          <span>-</span>
          <span>2</span>
          <span>6</span>
          <span>3</span>
        </div>

        <span>Não recebeu? <Link href=''>Eviar novamente</Link></span>     

        <button>Finalizar</button>
      </main>
    </>
  );
}