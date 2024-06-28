import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'yeridsonruan995@gmail.com',
    pass: 'zxamtdspurxjzbgi',
  },
});

const codigo = '224098';
const logoLink =
  'https://balcao-de-empregos-milagres.vercel.app/logo-balcao-de-empregos.svg';
const logo = '/logo-balcao-de-empregos.svg';

const TemplateEmail = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!DOCTYPE html>
<html dir="ltr" lang="pt-br">

  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>

  <body style="background-color:#ffffff;font-family:HelveticaNeue,Helvetica,Arial,sans-serif">
    <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:360px;background-color:#ffffff;border:1px solid #eee;border-radius:5px;box-shadow:0 5px 10px rgba(20,50,70,.2);margin-top:20px;margin:0 auto;padding:68px 0 130px">
      <tbody>
        <tr style="width:100%">
          <td><img alt="Balcão de Empregos" height="88" src="${logoLink}" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" width="212" />
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
    <p style="font-size:12px;line-height:23px;margin:0;color:#000;font-weight:800;letter-spacing:0;margin-top:20px;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;text-align:center;text-transform:uppercase">Securely powered by Plaid.</p>
  </body>

</html>
`;

export default async (req, res) => {
  const { response, messageId, accepted, rejected } =
    await transporter.sendMail({
      from: 'Balcao de Empregos <yeridsonruan995@gmail.com>',
      to: 'ruanyeridson@gmail.com',
      subject: 'Verifique seu Código',
      text: 'Hello world?',
      html: TemplateEmail,
    });

  console.log('Message sent: %s', messageId);
  res.status(200).json({ messageId, rejected, accepted });
};
