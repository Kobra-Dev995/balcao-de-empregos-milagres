import SideBar from '@/componets/SideBar';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-br' data-theme='light'>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/icone-balcao.png' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
