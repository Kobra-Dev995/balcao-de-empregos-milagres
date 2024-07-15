import { supabase } from "../../utils/db";

let arry = [];

async function handleSelect(e) {
  let { data: Usuarios_comum, error } = await supabase.from('Usuarios_comum').select('*');
  return Usuarios_comum;
}

async function handleInsert(name, birthday, phone, city, neighborhood, nickname, email, password, serviceType, biography, occupation) {
  const { data, error } = await supabase
    .from('Usuarios_comum')
    .insert({ Name: name, Birthday: birthday, Phone: phone, City: city, Neighborhood: neighborhood, Nickname: nickname, Email: email, Password: password, ServiceType: serviceType, Biography: biography, Picture: '/',OccupationArea: occupation });
}

export default async function Page1(req, res) {
  const data = await req.body;
  let objTemp = { ...data };

  console.log(data);

  if (objTemp.name && objTemp.nickname) {
    arry.push(objTemp);
    handleInsert(objTemp.name, objTemp.birthday, objTemp.phone, objTemp.city, objTemp.neighborhood, objTemp.nickname, objTemp.email, objTemp.password, objTemp.serviceType, objTemp.biographyn, objTemp.occupation);
  }

  console.log('----------dados do formulario------------');
  console.log(`Pessoa adicioada: ${objTemp.name || objTemp.nickname}`);
  console.log('----------dados do formulaio------------');
  res.status(200).json(handleSelect());
}
