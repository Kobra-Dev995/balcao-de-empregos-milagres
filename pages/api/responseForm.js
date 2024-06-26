let arry = [
  {
    user_name: 'admin',
    user_birthday: '1/1/2000',
    user_phone: '(11)11111-1111',
    user_city: 'Milagres',
    user_neighborhood: 'Centro',
  },
];

export default async function handler(req, res) {
  const data = await req.body;
  const dataObj = await data;
  if (data) {
    arry.push(dataObj);
  }
  console.log('----------dados do formulario------------');
  console.log(`Pessoa adicioada: ${data.name}`);
  console.log('----------dados do formulaio------------');
  res.status(200).json(arry);
}
