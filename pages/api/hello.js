// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export let codigoAleatorio = [];
const random = () => Math.floor(Math.random() * 10)

for (let i = 0; i < 6; i++) {
  codigoAleatorio.push(random());
}


export default function handler(req, res) {
  res.status(200).json({ Number: codigoAleatorio.join('') })
}