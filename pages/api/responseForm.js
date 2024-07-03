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
  let objTemp = { ...data };

  console.log(data);

  if (objTemp.name && objTemp.nickname) {
    arry.push(objTemp);
  }

  // if (data.name) {
  //   obj1 = await data;
  // }

  // if (data.nickname) {
  //   obj2 = await data;
  // }

  // if (obj1 && obj2) {
  //   objTemp = Object.assign(obj1, obj2);
  // }

  console.log('----------dados do formulario------------');
  console.log(`Pessoa adicioada: ${objTemp.name || objTemp.nickname}`);
  console.log('----------dados do formulaio------------');
  res.status(200).json(arry);
}
