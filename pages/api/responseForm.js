
export default async function POST(req) {
    console.log('Dados da resposta: ', req.formData());
    return req.json({'status': 200});
  }