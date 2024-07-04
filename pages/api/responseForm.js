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

import fs from 'fs';

function writeFile() {
  fs.writeFile('form.json', arry, function (err) {
    if (err) {
      console.log('An error occurred while saving userform data');
    }
  });

  console.log(arry);
}

export default async function Page1(req, res) {
  const data = await req.body;
  let objTemp = { ...data };

  console.log(data);

  if (objTemp.name && objTemp.nickname) {
    arry.push(objTemp);

    fs.writeFileSync('form.json', 'ioajaja', function (err) {
      if (err) {
        console.log('An error occurred while saving userform data');
      }

      console.log('criado');
    });
  }

  console.log('----------dados do formulario------------');
  console.log(`Pessoa adicioada: ${objTemp.name || objTemp.nickname}`);
  console.log('----------dados do formulaio------------');
  res.status(200).json(arry);
}
