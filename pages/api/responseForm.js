let arry = [
  {
    name: 'admin',
    birthday: '01/01/2000',
    phone: '(11)11111-1111',
    city: 'Milagres',
    neighborhood: 'Centro',
    nickname: 'super_admin',
    email: 'admin@gmail.com',
    password: 'admin',
    serviceType: 'Trabalhar',
    bio: 'Admin supremo',
  },
];

export default async function Page1(req, res) {
  const data = await req.body;

  // receber o primeiro formulario
  // receber o segundo formulario e adicionar ao primeiro
  // adicionar os dois formularios ao array

  const dataObj = await data;
  if (data) {
    arry.push(dataObj);
  }
  console.log('----------dados do formulario------------');
  console.log(`Pessoa adicioada: ${data.name}`);
  console.log('----------dados do formulaio------------');
  res.status(200).json(arry);
}

// export default async function Page2(req, res) {
//   const data = await req.body;
//   const dataObj = await data;
//   if (data) {
//     arry.push(dataObj);
//   }
//   console.log('----------dados do formulario------------');
//   console.log(`Pessoa adicioada: ${data.nickname}`);
//   console.log('----------dados do formulaio------------');

//   res.status(200).json(arry);
// }
