import SideBar from '@/componets/SideBar';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-br' data-theme='light'>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#fff' />
        <link rel='icon' href='/icone-balcao.png' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
