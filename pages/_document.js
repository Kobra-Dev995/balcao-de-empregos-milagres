import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt-br' data-theme='light'>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/icone-balcao.png' />
        <meta name="google-site-verification" content="lAFJGF0yUXC3X6sbYqKTE2fHWavIMSgZSe8oebXuLNU" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
