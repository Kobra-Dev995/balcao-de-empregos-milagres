import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  //host: 'smtp.gmail.com',
  //port: 587,
  auth: {
    user: 'yeridsonruan995@gmail.com',
    pass: 'zxamtdspurxjzbgi',
  },
});

const codigo = '000000';

const TemplateEmail = `
  <body style="background-color:#ffffff;font-family:HelveticaNeue,Helvetica,Arial,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:360px;background-color:#ffffff;border:1px solid #eee;border-radius:5px;box-shadow:0 5px 10px rgba(20,50,70,.2);margin-top:20px;margin:0 auto;padding:68px 0 130px">
      <tbody>
        <tr style="width:100%">
          <td><img alt="Balcão de Empregos" height="88" src="cid:LogoBalcaodeEmpregos" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" width="212" />
            <p style="font-size:11px;line-height:16px;margin:16px 8px 8px 8px;color:#0a85ea;font-weight:700;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;height:16px;letter-spacing:0;text-transform:uppercase;text-align:center">Verifique seu email.</p>
            <h1 style="color:#000;display:inline-block;font-family:HelveticaNeue-Medium,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;line-height:24px;margin-bottom:0;margin-top:0;text-align:center">Digite o seguinte código para terminar de vincular com o balcão de empregos.</h1>
            <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="background:rgba(0,0,0,.05);border-radius:4px;margin:16px auto 14px;vertical-align:middle;width:280px">
              <tbody>
                <tr>
                  <td>
                    <p style="font-size:32px;line-height:40px;margin:0 auto;color:#000;display:inline-block;font-family:HelveticaNeue-Bold;font-weight:700;letter-spacing:6px;padding-bottom:8px;padding-top:8px;width:100%;text-align:center">${codigo}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p style="font-size:15px;line-height:23px;margin:0;color:#444;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;letter-spacing:0;padding:0 40px;text-align:center">Não está esperando este e-mail?</p>
            <p style="font-size:15px;line-height:23px;margin:0;color:#444;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;letter-spacing:0;padding:0 40px;text-align:center"><a href="mailto:support.BalcaodeEmpregos@gmail.com" style="color:#444;text-decoration:underline" target="_blank">Entre em contato com o suporte</a> se você não solicitou este código.</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p style="font-size:12px;line-height:23px;margin:0;color:#000;font-weight:800;letter-spacing:0;margin-top:20px;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;text-align:center;text-transform:uppercase">Milagres-CE</p>
  </body>

</html>
`;

let message = {
  subject: 'Código de verificação de e-mail: ' + codigo,
  html: TemplateEmail,
  attachments: [
    {
      filename: 'BALCAO DE EMPREGOS.png',
      path: '\public\\BALCAO DE EMPREGO.png',
      cid: 'LogoBalcaodeEmpregos'
    }
  ]
};

export default async (req, res) => {
  const { response, messageId, accepted, rejected } =
    await transporter.sendMail({
      ...message,
      from: 'Balcao de Empregos <yeridsonruan995@gmail.com>',
      to: 'danyeelop@gmail.com',
    });

  console.log('Message sent: %s', messageId);
  res.status(200).json({ messageId, rejected, accepted });
};
