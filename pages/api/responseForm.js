import { supabase } from "../../utils/db";

// let arry = [
//   {
//     name: 'admin',
//     birthday: '01/01/2000',
//     phone: '(11)11111-1111',
//     city: 'Milagres',
//     neighborhood: 'Centro',
//     nickname: 'super_admin',
//     email: 'admin@gmail.com',
//     password: 'admin',
//     serviceType: 'Trabalhar',
//     biography: 'Admin supremo',
//   },
// ];

async function handleSelect(e) {
  let { data: Pessoas, error } = await supabase.from('Pessoas').select('*');
  return Pessoas;
}

async function handleInsert(name, birthday, phone, city, neighborhood, nickname, email, password, serviceType, biography) {
  const { data, error } = await supabase
    .from('Usuarios_comum')
    .insert({ Name: name, Birthday: birthday, Phone: phone, City: city, Neighborhood: neighborhood, Nickname: nickname, Email: email, Password: password, ServiceType: serviceType, Biography: biography });
}

export default async function Page1(req, res) {
  const data = await req.body;
  let objTemp = { ...data };

  console.log(data);

  if (objTemp.name && objTemp.nickname) {
    handleInsert(objTemp.name, objTemp.birthday, objTemp.phone, objTemp.city, objTemp.neighborhood, objTemp.nickname, objTemp.email, objTemp.password, objTemp.serviceType, objTemp.biography);
  }

  console.log('----------dados do formulario------------');
  console.log(`Pessoa adicioada: ${objTemp.name || objTemp.nickname}`);
  console.log('----------dados do formulaio------------');
  res.status(200).json(handleSelect());
}
