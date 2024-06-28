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

let obj1 = {};
let obj2 = {};

export default async function Page1(req, res) {
  const data = await req.body;

  if (data.name) {
    obj1 = await data
  }

  if (data.nickname) {
    obj2 = await data
  }

  let objTemp;

  if (data.nickname) {
    objTemp = Object.assign(obj1, obj2);
    arry.push(objTemp);
  }

  console.log('----------dados do formulario------------');
  console.log(`Pessoa adicioada: ${data.name || data.nickname}`);
  console.log('----------dados do formulaio------------');
  res.status(200).json(arry);
}