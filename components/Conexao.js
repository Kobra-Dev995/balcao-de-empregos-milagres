'use client';
import { getServerSession } from 'next-auth';

export default function Conexao() {

  async function teste() {
    const session = getServerSession();
    console.log(session);
  }
  teste()

  return <h1>laa</h1>;
}
